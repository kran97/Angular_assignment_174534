import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { CountTimerComponent } from './components/count-timer/count-timer.component';
import { EnterTimerComponent } from './components/enter-timer/enter-timer.component';
import { TimeStampComponent } from './components/time-stamp/time-stamp.component';
import { BtnCounterComponent } from './components/btn-counter/btn-counter.component';


@NgModule({
  declarations: [
    Route3Component,
    CountTimerComponent,
    EnterTimerComponent,
    TimeStampComponent,
    BtnCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Route3RoutingModule
  ]
})
export class Route3Module { }
