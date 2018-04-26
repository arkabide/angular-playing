import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class RestService<T> {

  constructor(private http: HttpClient) { }

  abstract resourceBase(): string;
  abstract host(): string;
  abstract getItemId(item: T): number;

  getAll(): Observable<T[]> {
    return (<Observable<T[]>>this.http.get(this.host() + this.resourceBase()));
  }

  add(item: T): Observable<T[]> {
    return <Observable<T[]>>this.http.post(this.host() + this.resourceBase(), item);
  }

  delete(item: T): Observable<T[]> {
    let id = this.getItemId(item);
    return <Observable<T[]>>this.http.delete(this.host() + this.resourceBase() + '/' + id);
  }

  update(idx, item: T): Observable<T[]> {
    return <Observable<T[]>>this.http.put(this.host() + this.resourceBase() + '/' + idx, item);
  }

}
