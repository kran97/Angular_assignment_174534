import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCounterComponent } from './btn-counter.component';

describe('BtnCounterComponent', () => {
  let component: BtnCounterComponent;
  let fixture: ComponentFixture<BtnCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
