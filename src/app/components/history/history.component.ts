import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { BookingRecord } from 'src/app/_models/bookingRecord.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  pnrNo: string;
  email: string;
 
  bookingRecord: BookingRecord = new BookingRecord();
  constructor(private router: Router, private bookingService: BookingService) { }
  ngOnInit(): void {
  }
 
  resetForm(): void {
    window.location.reload()
  }
 
  viewHistory(email:string) {
 
     const observable = this.bookingService.viewHistory(email)
     observable.subscribe((response: any) => {
       console.log(response);
       //this.airlines.push(response);
       this.router.navigate(['/historyDetails/'+email]);
     },
       function (error) {
         alert("Something went wrong!")
       })
  }

}
