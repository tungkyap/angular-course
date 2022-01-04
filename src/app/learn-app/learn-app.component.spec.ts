import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAppComponent } from './learn-app.component';

describe('LearnAppComponent', () => {
  let component: LearnAppComponent;
  let fixture: ComponentFixture<LearnAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
