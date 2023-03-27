import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScheduleFlight } from '../_models/schedule-flights.model';

const SCHEDULE_API = 'http://localhost:8081/schedule/';
const AIRPORT_API = 'http://localhost:8081/airport';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface AirportServerResponse {
  count: number;
  airports: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor( private http: HttpClient) { }

  addScheduleFlight(scheduleFlight: ScheduleFlight, flightID: any) {

    return this.http.post(SCHEDULE_API + 'save/' + flightID, scheduleFlight, httpOptions);

    // let form = new FormData();

    // form.append("scheduleFlightId", String(scheduleFlight.scheduleFlightId))

    // form.append("availableSeats", String(scheduleFlight.availableSeats))

    // form.append("flight", String(scheduleFlight.flight))

    // form.append("schedule", String(scheduleFlight.schedule));

    // let params = new HttpParams()

    //   .set('srcAirport', srcAirport)

    //   .set('dstnAirport', dstnAirport)

    //   .set('deptDateTime', deptDateTime)

    //   .set('arrDateTime', arrDateTime);

    // console.log(scheduleFlight);

    // console.log(params.toString());

    // // console.log(form);

    // return this.http.post('http://localhost:9092/scheduledFlight/add?', form, { params });

  }

  getSchedules() {
    return this.http.get(SCHEDULE_API + 'getall', httpOptions);
  }
 
  deleteSchedule(scheduleFlightId: any) {
    return this.http.delete(SCHEDULE_API + 'delete/' + scheduleFlightId, httpOptions);
  }
 
  getAvailableSchedules() {
    return this.http.get(SCHEDULE_API + 'getavailable', httpOptions);
  }
 
  getAirports() {
    return this.http.get<AirportServerResponse>(AIRPORT_API, httpOptions).pipe(map(response => response.airports));
  }

}