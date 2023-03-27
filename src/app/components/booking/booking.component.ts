import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { DiscountService } from 'src/app/services/discount.service';
import { BookingRecord } from 'src/app/_models/bookingRecord.model';
import { Passenger } from 'src/app/_models/passenger.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  
  airports: any[] = [];
  discounts: any[] = [];
 
  bookingRecord: BookingRecord = new BookingRecord();
  afterBookingRecord: BookingRecord = new BookingRecord();
  constructor(private router: Router, private bookingService: BookingService, private discountService: DiscountService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.bookingRecord.flightId = this.activatedRoute.snapshot.params['flightId'];
    this.bookingRecord.origin = this.activatedRoute.snapshot.params['source'];
    this.bookingRecord.destination = this.activatedRoute.snapshot.params['destination'];
    this.bookingRecord.flightDate = this.activatedRoute.snapshot.params['flightDate'];
    this.bookingRecord.fare = this.activatedRoute.snapshot.params['price'];
 
    this.discountService.getAllDiscount().subscribe(
      (data: any) => {
        this.discounts = data;
      },
      (err: any) => console.error(err),
      () => console.log('getDiscounts completed')
    );;
    // this.scheduleService.getAirports().subscribe(
    //   (data: any) => {
    //     this.airports = data;
    //   },
    //   (err: any) => console.error(err),
    //   () => console.log('getAirports completed')
    // );
  }
 
  resetForm(): void {
    window.location.reload()
  }
 
  bookTicket(bookingRecord: BookingRecord) {
    console.log(this.bookingRecord);
    const observable = this.bookingService.bookTicket(this.bookingRecord)
    observable.subscribe((response: any) => {
      this.afterBookingRecord = response;
      console.log(response);
      //this.airlines.push(response);
      this.router.navigate(['/ticket/' + this.afterBookingRecord.id]);
    },
      function (error) {
        alert("Something went wrong!")
      })
  }
  passengerCount() {
    console.log("---->" + this.bookingRecord.noOfPassengers);
    for (let i = 0; i < this.bookingRecord.noOfPassengers; i++) {
      let pass = new Passenger();
      this.bookingRecord.passengers.push(pass);
    }
  }
}