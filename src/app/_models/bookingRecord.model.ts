import { Passenger } from "./passenger.model";

 

export class BookingRecord {

    id:number;

    flightId: number;

    origin: string;

    destination: string;

    flightDate: Date;

    bookingDate: Date;

    fare: number;

    noOfPassengers: number;

    emailId: string;

    discountCode: string;

    passengers: Passenger[] = [];

}