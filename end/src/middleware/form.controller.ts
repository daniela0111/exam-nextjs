// form.controller.ts
import { FormMiddleware } from './form.middleware';

// ...
export class FormController {
 constructor(private readonly formService: FormService) {}

 @Post()
 @Use(FormMiddleware)
 async submitForm(@Body() data: any) {
    const processedData = await this.formService.processForm(data);
    return processedData;
 }
}