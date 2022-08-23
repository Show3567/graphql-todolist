import { Field, ObjectType } from '@nestjs/graphql';
import { Todo } from '../entities/todo.entity';

@ObjectType()
export class GetTodoOutput {
  @Field((type) => [Todo])
  todos: Todo[];
}
