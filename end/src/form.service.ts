// form.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class FormService {
 processForm(data: any): any {
    // Perform operations with the data here
    // For example, you can call other services, save data to the database, etc.

    console.log('Processing form data:', data);

    // Return the processed data
    return data;
 }
}