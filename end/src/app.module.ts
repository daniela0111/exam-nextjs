import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormMiddleware } from './middleware/form.middleware';
import { ReservationData } from './reservation/reservation.model';
import { UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { FormService } from './form.service';
import { ReservationService } from './reservation/reservation.service';
import { ValidationPipe } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('form')
  @UsePipes(ValidationPipe)
  submitForm(@Body() data: ReservationData): string {
    // ...
    return 'Form submitted successfully';
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