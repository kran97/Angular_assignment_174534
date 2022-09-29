import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTimerComponent } from './enter-timer.component';

describe('EnterTimerComponent', () => {
  let component: EnterTimerComponent;
  let fixture: ComponentFixture<EnterTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
