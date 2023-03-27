import { Component } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-get-airlines',
  templateUrl: './get-airlines.component.html',
  styleUrls: ['./get-airlines.component.css']
})
export class GetAirlinesComponent {

  airline = {
    airlineID: 0,
    airlineName: "",
    contactNumber: "",
    flightIDs: "",
    isBlock: false
  }

  airlines: any[] = [];
  requests: any;
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    //this.airlines = this.flightService.getAllFlights().subscribe((res: any)=>this.requests=res);
    this.flightService.getAllAirline().subscribe(
      (data: any) => {
        this.airlines = data;
      },
      (err: any) => console.error(err),
      () => console.log('getAirlines completed')
    );
  }
  delete(airline: any) {
    this.flightService.deleteAirline(airline).subscribe((response: any) => {
      console.log(response);
      window.location.reload()
    },
      function (error) {
        //alert("Error occured, deletion failed!");
        window.location.reload()
      })
  }

  update(airline: any) {
    if (airline.isBlock == true) {
      airline.isBlock = false;
    } else {
      airline.isBlock = true;
    }
    const observable = this.flightService.updateAirline(airline);
    observable.subscribe((response: any) => {
      console.log(response);
      window.location.reload()
    },
      function (error) {
        alert("Error occured,update failed!");
      })
  }
}
