import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit{

  cols: any[] = [];
  flights: any[] = [
    { flightCode: 'A123', src: 'Hyd', desc: 'chn', company: 'Indigo', date: '12-02-2022' }
  ];
  addNewFlightPopup: boolean = false;
  newFlight: any = {};
  flight = {
    flightId: 0,
    flightCode: "",
    totalSeats: 0,
    airlineCode: "",
    status: true
  }
  errorMessage: string = '';
  constructor(private router: Router, private flightService: FlightService) { }
  ngOnInit(): void {  }
 
  createNewFlight() {
 
    const observable = this.flightService.addFlight(this.newFlight)
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
