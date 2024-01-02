import { Controller, Post, Body } from '@nestjs/common';
import ReservationModel from './reservation.model';

@Controller('reservation')
export class ReservationController {
  @Post('book')
  async bookHotel(@Body() reservationData: ReservationData): Promise<string> {
    try {
      // Vytvoření nové rezervace v MongoDB pomocí Mongoose modelu
      const reservation = new ReservationModel(reservationData);
      await reservation.save();

      // Zpracování rezervace - vložte další logiku zpracování zde

      // V tomto příkladu vrátíme jednoduchou odpověď
      return `Rezervace pro ${reservationData.name} v hotelu ${reservationData.hotelChoice} na ${reservationData.rooms} místnost(i) byla úspěšně provedena!`;
    } catch (error) {
      console.error(error);
      return 'Něco se pokazilo při rezervaci.';
    }
  }
}

// Definujeme typ pro data rezervace
interface ReservationData {
  hotelChoice: string;
  name: string;
  rooms: number;
  checkIn: Date;
  checkOut: Date;
}
