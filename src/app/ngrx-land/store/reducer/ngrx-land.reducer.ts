import { Action, createReducer, on } from '@ngrx/store';
import { State } from '.';
import * as NgrxActions from '../actions/ngrx-land.actions';

export const initialState: State = {
  busy: false,
  error: null,
  todos: [],
};

export const todosReducer = createReducer(
  initialState,
  on(
    NgrxActions.fetchTodos,
    (state: State): State => ({ ...state, busy: true })
  ),
  on(
    NgrxActions.fetchTodosSuccess,
    (state: State, { todos }): State => ({
      ...state,
      busy: false,
      error: false,
      todos,
    })
  ),
  on(
    NgrxActions.fetchTodosFailure,
    (state: State, { error }): State => ({
      ...state,
      busy: false,
      todos: [],
      error,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}

export const getTodos = (state: State) => state.todos;
export const getBusy = (state: State) => state.error;
export const getError = (state: State) => state.busy;
