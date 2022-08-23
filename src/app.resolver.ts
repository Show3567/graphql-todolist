import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { GetTodoOutput } from './dto/todo.dto';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query((returns) => GetTodoOutput)
  getTodos(): GetTodoOutput {
    return this.appService.getTodos();
  }
}
