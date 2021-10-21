import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NgrxLandService } from '../../ngrx-land.service';
import {
  fetchTodos,
  fetchTodosFailure,
  fetchTodosSuccess,
} from '../actions/ngrx-land.actions';

@Injectable()
export class NgrxLandEffects {
  fetchTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodos),
      mergeMap(() =>
        this.service.getTodos().pipe(
          map((todos) => fetchTodosSuccess({ todos })),
          catchError((error) => of(fetchTodosFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: NgrxLandService) {}
}
