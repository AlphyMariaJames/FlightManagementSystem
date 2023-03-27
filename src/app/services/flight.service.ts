import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

const AIRLINE_API = 'http://localhost:8081/airline/';
const FLIGHT_API = 'http://localhost:8081/flight/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient, router: Router) { }

  addFlight(newFlight: any) {
    return this.http.post(FLIGHT_API + 'save', newFlight, httpOptions);
  }
  getAllFlights(): any {
    return this.http.get(FLIGHT_API + 'getallflights/', httpOptions);
  }
  getFlight(flightCode: any): any {
    return this.http.get(FLIGHT_API + 'getflightbyid/'+flightCode, httpOptions);
  }

 deleteFlight(flight: any) {
    return this.http.delete(FLIGHT_API + 'delete/'+ flight.flightId, httpOptions);
  }
  updateFlight(flight: any) {
    return this.http.put(FLIGHT_API + 'update/'+ flight.flightId, flight, httpOptions);
  }

  getAllAirline(): any {
    //return this.http.get('http://localhost:8083/flight-management/airline/' + 'getallairline/', httpOptions);
    return this.http.get(AIRLINE_API + 'getallairline/', httpOptions);
  }
  deleteAirline(airline: any) {
    return this.http.delete(AIRLINE_API + 'delete/'+ airline.airlineID, httpOptions);
  }

  updateAirline(airline: any) {
    return this.http.put(AIRLINE_API + 'update/'+ airline.airlineID, airline, httpOptions);
  }
 
  addAirline(airline:{airlineName: string, contactNumber: string, isBlock:boolean} ): Observable<any> {
    return this.http.post(AIRLINE_API + 'save', airline, httpOptions);
  }
}