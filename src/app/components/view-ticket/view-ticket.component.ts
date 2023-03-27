import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  pnrNo: string;
  //bookingRecord: BookingRecord = new BookingRecord();
  constructor(private router: Router, private bookingService: BookingService) { }

  ngOnInit(): void { }

  resetForm(): void {
    window.location.reload()
  }

  viewTicket(pnrNo: string) {
    this.router.navigate(['/ticket/' + this.pnrNo]);
    // const observable = this.bookingService.viewTicketDetails(pnrNo)
    // observable.subscribe((response: any) => {
    //   this.bookingRecord = response;
    //   console.log(response);
    //   //this.airlines.push(response);
    //   this.router.navigate(['/ticket/' + this.pnrNo]);
    // },
    //   function (error) {
    //     alert("Something went wrong!")
    //   })
  }

}
