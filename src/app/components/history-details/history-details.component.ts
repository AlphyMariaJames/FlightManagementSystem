import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { BookingRecord } from 'src/app/_models/bookingRecord.model';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit{
  
  bookingRecord: BookingRecord = new BookingRecord();
  bookingRecords: any[] = [];
  flights: any[] = [];
  requests: any;
  constructor(private router: Router, private bookingService: BookingService, private activatedRoute: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.bookingService.viewHistory(this.activatedRoute.snapshot.params['email']).subscribe(
      (data: any) => {
        this.bookingRecords = data;
      },
      (err: any) => console.error(err),
      () => console.log('getHistory completed')
    );
  }

  passengerData(bookingRec) {
    this.bookingRecord = bookingRec;
  }
  cancel(bookingRecor){
    this.bookingService.cancelticket(bookingRecor.id).subscribe(
      (data: any) => {
        this.bookingRecord = data;
        if(this.bookingRecord.id == 0){
          window.alert("You may cancel the booking 24 hrs before only...");
        }
        window.location.reload()
      },
      (err: any) => {console.error(err)
        window.location.reload();
        },
      () => console.log('getHistory completed')
      
    );
  }
}
