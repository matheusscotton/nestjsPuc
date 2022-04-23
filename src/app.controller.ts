import { Controller, Get } from '@nestjs/common';
import { ObjectUnsubscribedError } from 'rxjs';
import { AppService } from './app.service';

@Controller('carrinho')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get ('item')
  getObject ():any{
    return this.appService.getObject()
  }
}
