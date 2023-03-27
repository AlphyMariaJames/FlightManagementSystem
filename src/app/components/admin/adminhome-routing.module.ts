import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAirlinesComponent } from './get-airlines/get-airlines.component';
import { GetFlightsComponent } from './get-flights/get-flights.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GetSchedulesComponent } from './get-schedules/get-schedules.component';
import { DiscountComponent } from './discount/discount.component';
import { ViewDiscountsComponent } from './view-discounts/view-discounts.component';

const routes: Routes = [
    { path: '', component: AdminhomeComponent },
    { path: 'addAirline', component: AddAirlineComponent },
    { path: 'addFlight', component: AddFlightComponent },
    { path: 'addDiscount', component: DiscountComponent },
    { path: 'getDiscounts', component: ViewDiscountsComponent },
    { path: 'getAirline', component: GetAirlinesComponent },
    { path: 'getFlights', component: GetFlightsComponent },
    { path: 'updateFlight/:flightId', component: UpdateFlightComponent },
    { path: 'schedule/:flightId', component: ScheduleComponent },
    { path: 'getSchedules', component: GetSchedulesComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminhomeRoutingModule { }