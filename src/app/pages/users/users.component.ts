import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'exads-users',
  templateUrl: `./users.component.html`,
  styles: []
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['username', 'full_name', 'email', 'created_date'];
  users: any;
  isLoading = true;
  dataSource = null;
  url: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getUserData();
    // this.dataSource.paginator = this.paginator;
  }

  getUserData() {
    this.url = 'http://localhost:3000/users';
    this.users = this.apiService.getUsers(this.url).subscribe(
      data => {
        this.isLoading = false;
        this.dataSource = data;
      },
      error => this.isLoading = false
    );
  }

}
