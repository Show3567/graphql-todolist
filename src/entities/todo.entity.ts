import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field((type) => ID)
  id: number;

  @Field((type) => Number)
  userId: number;

  @Field((type) => String)
  title: string;

  @Field((type) => Boolean)
  completed: boolean;
}
