import { ContentChildren, Directive, ElementRef, NgZone, QueryList } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { SpyAreaForDirective } from './spy-area-for.directive';

@Directive({
  selector: '[spyScrollContainer]'
})
export class SpyScrollContainerDirective {

  constructor(
    public elementRef: ElementRef,
    public ngZone: NgZone
  ) { }

  @ContentChildren(SpyAreaForDirective)
  areas!: QueryList<SpyAreaForDirective>

  private destroy$ = new Subject();

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent<Event>(this.elementRef.nativeElement, "scroll")
        .pipe(
          debounceTime(40),
          map(ev => ev.target,
          takeUntil(this.destroy$))
        )
        .subscribe(() => {
          this.ngZone.run(() => {
            let found = false;
            for (const el of this.areas.toArray()) {
              el.areaFor.active = false;
              if (!found && el.elementRef.nativeElement.getBoundingClientRect().top > 0 ) {
                found = true;
                el.areaFor.active = true;
              }
            }
          })
        });
    });
  }

}
