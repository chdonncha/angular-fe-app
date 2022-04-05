import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ApiService} from './services/api.service';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'exads-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly ROOT_URL = 'http://localhost:3000/users';
  posts: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    // this.posts = this.http.get(this.ROOT_URL, { headers })
    //   .pipe(
    //     map( response => {
    //       return response.data.users;
    //     })
    //   );

  }
}
