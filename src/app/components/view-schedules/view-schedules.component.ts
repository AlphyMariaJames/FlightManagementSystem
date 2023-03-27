import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ScheduleFlight } from 'src/app/_models/schedule-flights.model';

@Component({
  selector: 'app-view-schedules',
  templateUrl: './view-schedules.component.html',
  styleUrls: ['./view-schedules.component.css']
})
export class ViewSchedulesComponent implements OnInit {

  scheduleFlights: ScheduleFlight[] = [];
  requests: any;

  constructor(private router: Router, private scheduleService: ScheduleService) { }
    ngOnInit(): void {

    //this.airlines = this.flightService.getAllFlights().subscribe((res: any)=>this.requests=res);
    this.scheduleService.getAvailableSchedules().subscribe(
      (data: any) => {
        this.scheduleFlights = data;
      },
      (err: any) => console.error(err),
      () => console.log('getSchedules completed')
    );
  }

  // delete(flight: any) {
  //   this.flightService.deleteFlight(flight).subscribe((response: any) => {
  //     console.log(response);
  //     window.location.reload()
  //   },
  //     function (error) {
  //       alert("Error occured, deletion failed!");
  //       window.location.reload()
  //     })
  // }

  delete(scheduleFlight) {
 
  }
  book(flightId: any, source: any, destination: any, flightDate: any, price: any) {
    this.router.navigate(["booking/" + flightId + '/' + source + '/' + destination + '/' + flightDate + '/' + price]);
  }
}
