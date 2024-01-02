import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationController } from './reservation/reservation.controller';
import { ReservationMiddleware } from './middleware/reservation.middleware';

@Module({
  imports: [],
  controllers: [AppController, ReservationController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReservationMiddleware).forRoutes('reservation/book');
  }
}
