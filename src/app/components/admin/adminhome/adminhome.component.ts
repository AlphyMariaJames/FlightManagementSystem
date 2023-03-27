import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{

  content?: string;
  cols: any[] = [];
  flights: any[] = [
    {flightCode: 'A123', src:'Hyd', desc:'chn', company:'Indigo', date:'12-02-2022'}
  ];
  addNewFlightPopup:boolean = false;
  newFlight:any = {};
  errorMessage:string= '';
 
  constructor(private userService: UserService, private router: Router) { }
 
  ngOnInit(): void {
    // this.userService.getAdminBoard().subscribe(
    //   data => {
    //     this.content = data;
    //   },
   //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
    this.cols =  [
      { field: 'flightCode', header: 'Flight Code' },
      { field: 'src', header: 'Source' },
      { field: 'desc', header: 'Destination' },
      { field: 'company', header: 'Company' },
      { field: 'date', header: 'Date' },
      { field: 'action', header: 'Action' }
    ];
  }
 
  openpopup() {
    this.addNewFlightPopup = true;
  }
 
  createNewFlight() {
      
    let index=this.flights.findIndex(e => e.flightCode == this.newFlight.flightCode);
    console.log('index....>>', index);
     if(index==-1){
      this.flights.push(this.newFlight);
      console.log('count....>>', this.newFlight.flightCode);
    }
    else{
      this.addNewFlightPopup=true;
      this.errorMessage = 'duplecated flight code';
      return;
    }
 
    this.newFlight=[];
    console.log('count....>>', this.newFlight);
    this.addNewFlightPopup=false;
 
  }
 
  deleteFlight(flightCode: any) {
    console.log('flightCode...........', flightCode);
    let index = this.flights.findIndex(e => e.flightCode == flightCode);
    console.log('index>>>>', index);
 
    this.flights.splice(index,1);
    console.log('count....>>', this.flights.length);
   // this.router.navigate(['/process']);

  }
}
