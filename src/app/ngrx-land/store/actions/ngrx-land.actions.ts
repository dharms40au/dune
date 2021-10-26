import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/shared/models/ITodo';

export const fetchTodos = createAction('[ngrx component] fetch todos');
export const fetchTodosSuccess = createAction(
  '[ngrx effects] fetch todos success',
  props<{ todos: ITodo[] }>()
);
export const fetchTodosFailure = createAction(
  '[ngrx effects] fetch todos failure',
  props<{ error: any }>()
);

export const createTodo = createAction(
  '[ngrx component] create todo',
  props<{ todo: ITodo }>()
);
export const createTodoSuccess = createAction(
  '[ngrx effects] create todo success',
  props<{ todo: ITodo }>()
);
export const createTodoFailure = createAction(
  '[ngrx effects] create todo failure',
  props<{ error: any }>()
);
