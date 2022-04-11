import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  readonly ROOT_URL = 'http://localhost:3000/users';

  getUsers() {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http.get(this.ROOT_URL, {headers})
      .pipe(
        map(({data}: {data: any}) => data.users),
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
