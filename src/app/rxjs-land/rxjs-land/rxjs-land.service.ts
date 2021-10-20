import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/shared/models/ITodo';
import { IUser } from 'src/app/shared/models/IUser';

@Injectable()
export class RxjsLandService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl + 'users');
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.baseUrl + 'todos');
  }
}
