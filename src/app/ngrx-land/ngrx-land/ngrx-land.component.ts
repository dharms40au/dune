import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITodo } from 'src/app/shared/models/ITodo';
import { createTodo, fetchTodos } from '../store/actions/ngrx-land.actions';
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
    this.test();
  }

  test() {
    const todo: ITodo = {
      id: 99999,
      userId: 1,
      title: 'test',
      completed: false,
    };

    this.store.dispatch(createTodo({ todo }));
  }
}
