import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { ViewSchedulesComponent } from './components/view-schedules/view-schedules.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { AddAirlineComponent } from './components/admin/add-airline/add-airline.component';
 
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    UserhomeComponent,
    HomeComponent,
    NavbarComponent,
    ViewSchedulesComponent,
    HistoryComponent,
    ViewTicketComponent,
    BookingComponent,
    HistoryDetailsComponent,
    TicketComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //NgbModule.forRoot(),
    //AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
