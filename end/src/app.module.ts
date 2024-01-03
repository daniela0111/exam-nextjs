import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
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
    return 'Form submitted successfully';
  }
}
