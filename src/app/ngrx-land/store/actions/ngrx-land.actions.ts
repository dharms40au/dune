import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/shared/models/ITodo';

export const fetchTodos = createAction('[ngrx component] fetch todos');
export const fetchTodosSuccess = createAction(
  '[ngrx component] fetch todos success',
  props<{ todos: ITodo[] }>()
);
export const fetchTodosFailure = createAction(
  '[ngrx component] fetch todos failure',
  props<{ error: any }>()
);
