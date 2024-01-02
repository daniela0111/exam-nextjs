// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ReservationModel } from './reservation/reservation.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly reservationModel: ReservationModel) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
