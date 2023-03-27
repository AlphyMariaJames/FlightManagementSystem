import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { BookingRecord } from 'src/app/_models/bookingRecord.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  bookingRecord: BookingRecord = new BookingRecord();
  constructor(private bookingService: BookingService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const observable = this.bookingService.viewTicketDetails(this.activatedRoute.snapshot.params['id'])
    observable.subscribe((response: any) => {
      this.bookingRecord = response;
      console.log(response);

      //this.airlines.push(response);
      //this.router.navigate(['/ticket/' + this.pnrNo]);
    },
      function (error) {
        alert("Something went wrong!")
      })
  }

  // passengerCount() {
  //   console.log("---->" + this.bookingRecord.noOfPassengers);
  //   for (let i = 0; i < this.bookingRecord.noOfPassengers; i++) {
  //     let pass = new Passenger();
  //     this.bookingRecord.passengers.push(pass);
  //   }
  // }
}
