import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'exads-users',
  template: `      
      <table mat-table [dataSource]="this.users" class="mat-elevation-z8">-->

          <!-- Username -->
          <ng-container matColumnDef="position">
              <th mat-header-cell *matHeaderCellDef> Username</th>
              <td mat-cell *matCellDef="let element"> {{element.username}} </td>
          </ng-container>

          <!-- Full Name -->
          <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef> Full Name</th>
              <td mat-cell *matCellDef="let element"> {{element.first_name}} {{ element.last_name}} </td>
          </ng-container>

          <!-- Email Column -->
          <ng-container matColumnDef="weight">
              <th mat-header-cell *matHeaderCellDef> Email</th>
              <td mat-cell *matCellDef="let element"> {{element.email}} </td>
          </ng-container>

          <!-- Status Column -->
          <ng-container matColumnDef="symbol">
              <th mat-header-cell *matHeaderCellDef> Status</th>
              <td mat-cell *matCellDef="let element"> {{element.created_date}} </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = "test";
  users: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {

    this.getUserData();
    console.log(this.users);
    
    // console.log(data);
    // this.populateTable();

    // console.log(dataSource);
  }

  // populateTable() {
  //   this.dataSource = new MatTableDataSource();
  // }

  getUserData() {
    this.users = this.apiService.getUsers();
  }

}
