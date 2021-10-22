import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from 'src/app/shared/models/ITodo';
import { State } from '.';
import * as NgrxActions from '../actions/ngrx-land.actions';

export function selectTodoId(t: ITodo): number {
  return t.id;
}

export function sortByTitle(a: ITodo, b: ITodo): number {
  return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
  selectId: selectTodoId,
  sortComparer: sortByTitle,
});

export const initialState: State = adapter.getInitialState({
  selectedTodoId: 0,
  busy: false,
  error: null,
});

export const todosReducer = createReducer(
  initialState,
  on(
    NgrxActions.fetchTodos,
    (state: State): State => ({ ...state, busy: true })
  ),
  on(
    NgrxActions.fetchTodosSuccess,
    (state: State, { todos }): State => ({
      ...adapter.addMany(todos, state),
      busy: false,
      error: false,
    })
  ),
  on(
    NgrxActions.fetchTodosFailure,
    (state: State, { error }): State => ({
      ...state,
      busy: false,
      error,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
