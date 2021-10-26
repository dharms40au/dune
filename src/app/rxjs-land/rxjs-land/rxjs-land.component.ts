import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  shareReplay,
  startWith,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { DeviceType } from 'src/app/shared/models/DeviceType';
import { ITodo } from 'src/app/shared/models/ITodo';
import { IUser } from 'src/app/shared/models/IUser';
import { RxjsLandService } from './rxjs-land.service';

@Component({
  selector: 'app-rxjs-land',
  templateUrl: './rxjs-land.component.html',
  styleUrls: ['./rxjs-land.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsLandComponent implements OnInit, OnDestroy {
  users$: Observable<IUser[]> = this.service.getUsers().pipe(shareReplay());
  todos$: Observable<ITodo[]> = this.service.getTodos();
  filteredTodos$!: Observable<ITodo[]>;
  deviceType$!: Observable<string>;
  deviceType!: String;
  // subscription = new Subscription();

  searchFormControl = new FormControl('');

  constructor(
    private service: RxjsLandService,
    private breakPointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.filteredTodos$ = this.searchFormControl.valueChanges.pipe(
      withLatestFrom(this.todos$),
      map(([searchTerm, todos]: [string, ITodo[]]) =>
        todos.filter((t) =>
          t.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );

    // this.subscription.add(
    this.breakPointObserver
      .observe(['(min-width: 481px)', '(min-width: 1025px)'])
      .pipe(
        map(({ breakpoints, matches }) => {
          if (!matches) {
            return DeviceType.Phone;
          }
          if (breakpoints['(min-width: 1025px)']) {
            return DeviceType.Desktop;
          }
          return DeviceType.Tablet;
        })
      )
      .subscribe((type) => {
        console.log(type);
        this.deviceType = type;
      });
    // );

    this.deviceType$ = this.breakPointObserver
      .observe(['(min-width: 481px)', '(min-width: 1025px)'])
      .pipe(
        map(({ breakpoints, matches }) => {
          if (!matches) {
            return DeviceType.Phone;
          }
          if (breakpoints['(min-width: 1025px)']) {
            return DeviceType.Desktop;
          }
          return DeviceType.Tablet;
        })
      );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
