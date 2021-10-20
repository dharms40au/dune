import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/IUser';
import { RxjsLandService } from './rxjs-land.service';

@Component({
  selector: 'app-rxjs-land',
  templateUrl: './rxjs-land.component.html',
  styleUrls: ['./rxjs-land.component.scss'],
})
export class RxjsLandComponent implements OnInit {
  users$: Observable<IUser[]> = this.service.getUsers();

  constructor(private service: RxjsLandService) {}

  ngOnInit(): void {
    this.users$.subscribe(console.log);
  }
}
