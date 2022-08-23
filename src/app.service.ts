import { Injectable } from '@nestjs/common';
import {
  AddTodoInput,
  DeleteTodoInput,
  DeleteTodoOutput,
  GetTodosOutput,
} from './dto/todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class AppService {
  todolist: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: 'illo expedita consequatur quia in',
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: 'quo adipisci enim quam ut ab',
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: 'molestiae perspiciatis ipsa',
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: 'illo est ratione doloremque quia maiores aut',
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      title: 'vero rerum temporibus dolor',
      completed: true,
    },
  ];
  id: number = Math.floor(Math.random() * 1000000000);

  getTodos(): GetTodosOutput {
    return {
      todos: this.todolist,
    };
  }
  addTodo(todoInput: AddTodoInput) {
    const todo = {
      ...todoInput,
      id: Math.floor(Math.random() * 1000_000_000),
    };
    this.todolist = [...this.todolist, todo];
    console.log(this.todolist);
    return { todo };
  }
  deleteTodo({ id }: DeleteTodoInput) {
    this.todolist = this.todolist.filter((todo) => todo.id !== id);
    console.log(this.todolist);
  }
}
