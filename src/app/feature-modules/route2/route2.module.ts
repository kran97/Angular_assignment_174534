import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route2RoutingModule } from './route2-routing.module';
import { Route2Component } from './route2.component';


@NgModule({
  declarations: [
    Route2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Route2RoutingModule
  ]
})
export class Route2Module { }
