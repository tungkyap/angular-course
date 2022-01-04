import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { SpyAnchorDirective } from './spy-anchor.directive';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[spyAreaFor]'
})
export class SpyAreaForDirective implements AfterViewInit, OnDestroy {
  @Input("spyAreaFor")
  areaFor!: SpyAnchorDirective;

  constructor(public elementRef: ElementRef<HTMLElement>) { }

  private destroy$ = new Subject();

  ngAfterViewInit() {
    fromEvent(this.areaFor.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        () => this.elementRef.nativeElement.scrollIntoView()
      )
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
