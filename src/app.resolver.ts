import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import {
  AddTodoInput,
  AddTodoOutput,
  DeleteTodoInput,
  DeleteTodoOutput,
  GetTodoInput,
  GetTodoOutput,
  GetTodosOutput,
} from './dto/todo.dto';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query((returns) => GetTodosOutput)
  getTodos(): GetTodosOutput {
    return this.appService.getTodos();
  }
  @Query((returns) => GetTodoOutput)
  getTodo(@Args('input') getTodoInput: GetTodoInput): GetTodoOutput {
    return this.appService.getTodo(getTodoInput.id);
  }

  @Mutation((returns) => AddTodoOutput)
  addTodo(@Args('input') addTodoInput: AddTodoInput): AddTodoOutput {
    return this.appService.addTodo(addTodoInput);
  }

  @Mutation((returns) => DeleteTodoOutput)
  deleteTodo(
    @Args('input') deleteTodoInput: DeleteTodoInput,
  ): DeleteTodoOutput {
    return this.appService.deleteTodo(deleteTodoInput);
  }
}
