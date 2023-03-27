import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';
import { HistoryComponent } from './components/history/history.component';
 
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { ViewSchedulesComponent } from './components/view-schedules/view-schedules.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
 
const routes: Routes = [
  { path: "login", component: LoginComponent },
{ path: "signup", component: SignupComponent },
{ path: 'home', component: HomeComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: UserhomeComponent },
{ path: 'viewSchedule', component: ViewSchedulesComponent },
{ path: 'viewTicket', component: ViewTicketComponent },
{ path: 'ticket/:id', component: TicketComponent },
{ path: 'booking/:flightId/:source/:destination/:flightDate/:price', component: BookingComponent },
{ path: 'history', component: HistoryComponent },
{ path: 'historyDetails/:email', component: HistoryDetailsComponent },
{ path: 'admin',
 loadChildren: () => import('./components/admin/adminhome.module').then(mod => mod.AdminhomeModule) },
{ path: '', redirectTo: 'login', pathMatch: 'full' }];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }