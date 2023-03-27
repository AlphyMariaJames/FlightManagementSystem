import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeRoutingModule } from './adminhome-routing.module';
import { GetAirlinesComponent } from './get-airlines/get-airlines.component';
import { GetFlightsComponent } from './get-flights/get-flights.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GetSchedulesComponent } from './get-schedules/get-schedules.component';
import { DiscountComponent } from './discount/discount.component';
import { ViewDiscountsComponent } from './view-discounts/view-discounts.component';
 
@NgModule({
  declarations: [
    AdminhomeComponent,
    GetAirlinesComponent,
    AddAirlineComponent,
    AddFlightComponent,
    GetFlightsComponent,
    UpdateFlightComponent,
    ScheduleComponent,
    GetSchedulesComponent,
    DiscountComponent,
    ViewDiscountsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminhomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminhomeModule { }