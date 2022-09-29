import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { Route4serviceService } from './service/route4service.service';
import { EnterTimerComponent } from './components/enter-timer/enter-timer.component';
import { CountTimerComponent } from './components/count-timer/count-timer.component';
import { TimeStampComponent } from './components/time-stamp/time-stamp.component';
import { BtnCounterComponent } from './components/btn-counter/btn-counter.component';


@NgModule({
  declarations: [
    Route4Component,
    EnterTimerComponent,
    CountTimerComponent,
    TimeStampComponent,
    BtnCounterComponent
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // Route4serviceService
  ]
})
export class Route4Module { }
