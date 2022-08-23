import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AddTodoInput, AddTodoOutput, GetTodosOutput } from './dto/todo.dto';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query((returns) => GetTodosOutput)
  getTodos(): GetTodosOutput {
    return this.appService.getTodos();
  }
  @Mutation((returns) => AddTodoOutput)
  addTodo(@Args('input') addTodoInput: AddTodoInput): AddTodoOutput {
    return this.appService.addTodo(addTodoInput);
  }
}
