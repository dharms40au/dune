import { ITodo } from 'src/app/shared/models/ITodo';

export interface State {
  busy: boolean;
  error: any;
  todos: ITodo[];
}
