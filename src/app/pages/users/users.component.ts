import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatTableDataSource, MatPaginator } from "@angular/material";

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

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.loadUserPage();
  }

  getUserData() {
    this.url = 'http://localhost:3000/users';
    this.users = this.apiService.getUsers(this.url).subscribe(
      data => {
        this.isLoading = false;
        this.dataSource = data;
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.paginator = this.paginator
      },
      error => this.isLoading = false
    );
  }

  loadUserPage() {
    this.isLoading = true;
    this.getUserData();
  }
}
