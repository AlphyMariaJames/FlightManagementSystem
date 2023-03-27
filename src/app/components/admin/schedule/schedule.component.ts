import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ScheduleFlight } from 'src/app/_models/schedule-flights.model';
import { Schedule } from 'src/app/_models/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{

  srcAirport: string;
  dstnAirport: string;
  deptDateTime: string;
  arrDateTime: string;
  flightid: string;
  airports: any[] = [];
 
  scheduleFlight: ScheduleFlight = new ScheduleFlight();
  constructor(private router: Router, private scheduleService: ScheduleService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.flightid = this.activatedRoute.snapshot.params['flightId'];
    this.scheduleService.getAirports().subscribe(
      (data: any) => {
        this.airports = data;
      },
      (err: any) => console.error(err),
      () => console.log('getAirports completed')
    );
  }
 
  resetForm(): void {
    window.location.reload()
  }
 
  schedulingFlight(scheduleFlight) {
    let schedule1 = new Schedule();
    schedule1.source = this.srcAirport;
    schedule1.destination = this.dstnAirport;
    schedule1.arrDateTime = this.arrDateTime;
    schedule1.deptDateTime = this.deptDateTime;
 
    scheduleFlight.schedule = schedule1;
 
    const observable = this.scheduleService.addScheduleFlight(scheduleFlight, this.flightid)
    observable.subscribe((response: any) => {
      console.log(response);
      //this.airlines.push(response);
      this.router.navigate(['/admin/getSchedules']);
    },
      function (error) {
        alert("Something went wrong!")
      })
  }
}
