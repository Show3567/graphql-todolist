import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Todo } from '../entities/todo.entity';

//* ~~~~~~~~~~~~~~~~~~~~~~~~ Get Todos
@ObjectType()
export class GetTodosOutput {
  @Field((type) => [Todo])
  todos: Todo[];
}

//* ~~~~~~~~~~~~~~~~~~~~~~~~ Add Todo
@InputType()
export class AddTodoInput {
  @Field((type) => Number)
  userId: number;
  @Field((type) => String)
  title: string;
  @Field((type) => Boolean)
  completed: boolean;
}
@ObjectType()
export class AddTodoOutput {
  @Field((type) => Todo)
  todo: Todo;
}

//* ~~~~~~~~~~~~~~~~~~~~~~~~ Delete Todo
@InputType()
export class DeleteTodoInput {
  @Field((type) => Number)
  id: number;
}
