// form.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class FormMiddleware implements NestMiddleware {
 use(req: Request, res: Response, next: NextFunction) {
    const { hotelChoice, name, rooms, checkin, checkout } = req.body;
    // Process the form data or apply the logic
    // ...
    if (!hotelChoice || !name || !rooms || !checkin || !checkout) {
      return res.status(400).json({ error: 'Bad Request: All fields are required' });
    }
    next();
 }
}
