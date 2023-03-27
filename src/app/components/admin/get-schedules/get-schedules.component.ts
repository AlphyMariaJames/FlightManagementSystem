import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ScheduleFlight } from 'src/app/_models/schedule-flights.model';

@Component({
  selector: 'app-get-schedules',
  templateUrl: './get-schedules.component.html',
  styleUrls: ['./get-schedules.component.css']
})
export class GetSchedulesComponent {

  scheduleFlights: ScheduleFlight[] = [];
  requests: any;
  constructor(private router: Router, private scheduleService: ScheduleService) { }
 
  ngOnInit(): void {
    //this.airlines = this.flightService.getAllFlights().subscribe((res: any)=>this.requests=res);
    this.scheduleService.getSchedules().subscribe(
      (data: any) => {
        this.scheduleFlights = data;
      },
      (err: any) => console.error(err),
      () => console.log('getSchedules completed')
    );
  }
 
  delete(scheduleFlightId:any){
    this.scheduleService.deleteSchedule(scheduleFlightId).subscribe((response: any) => {
      console.log(response);
      window.location.reload()
    },
      function (error) {
        //alert("Error occured, deletion failed!");
        window.location.reload()
      })
  }
  update(flightId: any) {
    this.router.navigate(["admin/updateSchedule/" + flightId]);
  }
}
