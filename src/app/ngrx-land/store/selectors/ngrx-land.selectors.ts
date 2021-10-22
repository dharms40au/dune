import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducer';
import { selectAll } from '../reducer/ngrx-land.reducer';

export const featureSelector = createFeatureSelector<State>('ngrxLandFeature');

export const selectTodos = createSelector(featureSelector, selectAll);
