import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
 
@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
 
  phoneFlag: boolean = false;
  airlines: any[] = [
    { airlineName: 'A123', contactNumber: 'Hyd', isBlock: false }
  ];
  newAirline: any = {};
 
  constructor(private router: Router, private flightService: FlightService) { }
  ngOnInit(): void { }
 
  createNewAirline() {
 
    const observable = this.flightService.addAirline(this.newAirline)
    observable.subscribe((response: any) => {
      console.log(response);
      //this.airlines.push(response);
      this.router.navigate(['/admin/getAirline']);
    },
      function (error) {
        alert("Something went wrong!")
      })
  }
  resetForm(): void {
    window.location.reload()
  }
 
  nameFlag: boolean = false;
  validateName() {
    //var flag = /^[a-zA-Z ]+$/.test(this.newAirline.airlineName);
    if (!(this.newAirline.airlineName.length>=3)) {
      this.nameFlag = true;
    }
    else {
      this.nameFlag = false;
    }
  }
  validatePhone() {
    let phone = String(this.newAirline.contactNumber);
    if (phone.length != 10) {
      this.phoneFlag = true;
    } else {
      this.phoneFlag = false;
    }
  }
  buttonFlag: boolean = true;
  enableButton() {
    this.buttonFlag = this.nameFlag || this.phoneFlag;
  }
}