import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ITodo } from 'src/app/shared/models/ITodo';

export interface State extends EntityState<ITodo> {
  selectedTodoId: number;
  busy: boolean;
  error: any;
}
