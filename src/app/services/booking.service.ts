import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookingRecord } from '../_models/bookingRecord.model';

const BOOKING_API = 'http://localhost:8081/booking/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  bookTicket(bookingRecord: BookingRecord) {
    return this.http.post(BOOKING_API + 'save/', bookingRecord, httpOptions);
  }

  viewHistory(email: string) {
    return this.http.get(BOOKING_API + 'history/' + email, httpOptions);
  }
 
  viewTicketDetails(pnrNo: string) {
    return this.http.get(BOOKING_API + 'ticket/' + pnrNo, httpOptions);
  }
 
  cancelticket(pnrNo: string) {
    return this.http.delete(BOOKING_API + 'cancel/' + pnrNo, httpOptions);
  }
}
