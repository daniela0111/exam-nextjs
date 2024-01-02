import { Body, Controller, Get, Injectable, Post, Use } from '@nestjs/common';
import { AppService } from './app.service';
import { FormService } from './form.service';
import { FormMiddleware } from './middleware/form.middleware';
import { ReservationService } from './reservation/reservation.service';
import { ReservationData } from './models/reservation.model';

@Controller()
export class AppController {
 constructor(private readonly appService: AppService) {}

 @Get()
 getHello(): string {
    return this.appService.getHello();
 }
}

@Injectable()
export class AppService {
 getHello(): string {
    return 'Hello World!';
 }
}

@Injectable()
export class FormService {
 // ...
}

@Injectable()
export class ReservationService {
 // ...
}

// Other services, controllers, etc. should also have the correct imports and decorators.