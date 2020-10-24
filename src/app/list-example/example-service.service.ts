import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const routes = {
  users: () => `/users`,
};

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load user :-('))
    );
  }
}
