import { Flight } from "./flight.model";

import { Schedule } from "./schedule.model";

 

export class ScheduleFlight {

    scheduleFlightId: number;

    flight: Flight;

    availableSeats: number;

    price: number;

    schedule: Schedule;

}