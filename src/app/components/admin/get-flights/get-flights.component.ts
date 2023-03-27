import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-get-flights',
  templateUrl: './get-flights.component.html',
  styleUrls: ['./get-flights.component.css']
})
export class GetFlightsComponent implements OnInit{

  flight = {
    flightId: 0,
    flightCode: "",
    totalSeats: 0,
    price: "",
    airlineCode: "",
    status: true
  }
  flightID = 0;
  flights: any[] = [];
  requests: any;
  constructor(private router: Router,private flightService: FlightService) { }
 
  ngOnInit(): void {
    //this.airlines = this.flightService.getAllFlights().subscribe((res: any)=>this.requests=res);
    this.flightService.getAllFlights().subscribe(
      (data: any) => {
        this.flights = data;
      },
      (err: any) => console.error(err),
      () => console.log('getAirlines completed')
    );
  }
  delete(flight: any) {
    this.flightService.deleteFlight(flight).subscribe((response: any) => {
      console.log(response);
      window.location.reload()
    },
      function (error) {
        //alert("Error occured, deletion failed!");
        window.location.reload()
      })
  }
 
  update(flightId: any) {
    this.router.navigate(["admin/updateFlight/"+flightId]);
    //const observable = this.flightService.updateAirline(flight);
    //observable.subscribe((response: any) => {
    //  console.log(response);
    //  window.location.reload()
    //},
      //function (error) {
        //alert("Error occured, deletion failed!");
     // })
  }
 
  schedule(flightId: any) {
    this.router.navigate(["admin/schedule/"+flightId]);
    //const observable = this.flightService.updateAirline(flight);
    //observable.subscribe((response: any) => {
    //  console.log(response);
    //  window.location.reload()
    //},
      //function (error) {
        //alert("Error occured, deletion failed!");
     // })
  }
}
