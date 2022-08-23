import { Controller, Get } from '@nestjs/common';
import { AppService, Todo } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Todo[] {
    return this.appService.getHello();
  }
}
