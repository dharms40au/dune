import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fetchTodos } from '../store/actions/ngrx-land.actions';
import { State } from '../store/reducer';
import { selectTodos } from '../store/selectors/ngrx-land.selectors';

@Component({
  selector: 'app-ngrx-land',
  templateUrl: './ngrx-land.component.html',
  styleUrls: ['./ngrx-land.component.scss'],
})
export class NgrxLandComponent implements OnInit {
  todos$ = this.store.pipe(select(selectTodos));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchTodos());
  }
}
