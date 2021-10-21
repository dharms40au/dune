import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  shareReplay,
  startWith,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ITodo } from 'src/app/shared/models/ITodo';
import { IUser } from 'src/app/shared/models/IUser';
import { RxjsLandService } from './rxjs-land.service';

@Component({
  selector: 'app-rxjs-land',
  templateUrl: './rxjs-land.component.html',
  styleUrls: ['./rxjs-land.component.scss'],
})
export class RxjsLandComponent implements OnInit {
  users$: Observable<IUser[]> = this.service.getUsers().pipe(shareReplay());
  todos$: Observable<ITodo[]> = this.service.getTodos();
  filteredTodos$: Observable<ITodo[]>;

  searchFormControl = new FormControl('');

  constructor(private service: RxjsLandService) {
    this.filteredTodos$ = this.searchFormControl.valueChanges.pipe(
      withLatestFrom(this.todos$),
      map(([searchTerm, todos]: [string, ITodo[]]) =>
        todos.filter((t) =>
          t.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }
  ngOnInit(): void {}
}
