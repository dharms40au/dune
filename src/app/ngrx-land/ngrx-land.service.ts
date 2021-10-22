import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../shared/models/ITodo';

@Injectable()
export class NgrxLandService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.baseUrl + 'todos');
  }
}
