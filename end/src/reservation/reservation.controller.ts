// reservation.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationData } from './reservation.interface';

@Controller('reservation')
export class ReservationController {
 constructor(private readonly reservationService: ReservationService) {}

 @Post('book')
 async bookHotel(@Body() reservationData: ReservationData): Promise<{message: string}> {
    const bookingMessage = await this.reservationService.bookHotel(reservationData);
    return { message: bookingMessage };
 }
}
