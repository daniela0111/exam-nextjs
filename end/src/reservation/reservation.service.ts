// reservation.service.ts
import { Injectable } from '@nestjs/common';
import { ReservationData } from './reservation.interface';

@Injectable()
export class ReservationService {
 async bookHotel(reservationData: ReservationData): Promise<string> {
    // ...
    // Add your logic to book the hotel
    // ...
    return 'Your hotel has been booked successfully!';
 }
}