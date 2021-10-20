import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
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

  constructor(private service: RxjsLandService) {}

  ngOnInit(): void {
    this.todos$.subscribe(console.log);
  }
}
