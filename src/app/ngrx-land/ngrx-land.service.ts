import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../shared/models/ITodo';

@Injectable()
export class NgrxLandService {
  private baseUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.baseUrl);
  }

  createTodo(todo: ITodo) {
    return this.http.post<ITodo>(this.baseUrl, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateTodo(id: number, todo: ITodo) {
    return this.http.put(`${this.baseUrl}/${id}`, todo);
  }
}
