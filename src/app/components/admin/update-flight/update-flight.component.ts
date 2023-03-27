import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from 'src/app/_models/flight.model';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  flight: any = {};
 
  constructor(private router: Router, private flightService: FlightService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.flightService.getFlight(this.activatedRoute.snapshot.params['flightId']).subscribe((response: any) => {
      console.log(response);
      this.setForm(response);
 
    })
  }
  setForm(flight: any) {
    let flightNew = new Flight();
    flightNew.flightId = flight.flightId;
    flightNew.flightCode = flight.flightCode;
    flightNew.airlineCode = flight.airlineCode;
    flightNew.totalSeats = flight.totalSeats;
    flightNew.price = flight.price;
    flightNew.status = flight.status;
    this.flight = flightNew;
  }
  updateFlight() {
 
    const observable = this.flightService.updateFlight(this.flight)
    observable.subscribe((response: any) => {
      console.log(response);
      //this.airlines.push(response);
      this.router.navigate(['/admin/getFlights']);
    },
      function (error) {
        alert("Something went wrong!")
      })
  }
 
  resetForm(): void {
    window.location.reload()
  }
}
