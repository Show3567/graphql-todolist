import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './entities/todo.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Todo[] {
    return this.appService.getHello();
  }
}
