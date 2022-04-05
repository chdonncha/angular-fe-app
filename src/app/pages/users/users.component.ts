import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'exads-users',
  template: `
          <p><button mat-raised-button color="primary">New User</button>
          </p>
          <div *ngFor="let user of users | async | keyvalue">
              <ul>
                  <li>Name: {{ user.value.first_name }} </li>
                  <li>Email: {{ user.value.email }}</li>
              </ul>
          </div>

<!--      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">-->

<!--          &lt;!&ndash; Username Column &ndash;&gt;-->
<!--          <ng-container matColumnDef="position">-->
<!--              <th mat-header-cell *matHeaderCellDef> Username</th>-->
<!--              <td mat-cell *matCellDef="let element"> {{element.first_name}} </td>-->
<!--          </ng-container>-->

<!--          &lt;!&ndash; Full Name Column &ndash;&gt;-->
<!--          <ng-container matColumnDef="name">-->
<!--              <th mat-header-cell *matHeaderCellDef> Full Name</th>-->
<!--              <td mat-cell *matCellDef="let element"> {{element.email}} </td>-->
<!--          </ng-container>-->

          <!-- Email Column -->
<!--          <ng-container matColumnDef="weight">-->
<!--              <th mat-header-cell *matHeaderCellDef> Email</th>-->
<!--              <td mat-cell *matCellDef="let element"> {{element.weight}} </td>-->
<!--          </ng-container>-->

          <!-- Status Column -->
<!--          <ng-container matColumnDef="symbol">-->
<!--              <th mat-header-cell *matHeaderCellDef> Status</th>-->
<!--              <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>-->
<!--          </ng-container>-->

          <!-- Date Created Column -->
<!--          <ng-container matColumnDef="symbol">-->
<!--              <th mat-header-cell *matHeaderCellDef> Date Created</th>-->
<!--              <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>-->
<!--          </ng-container>-->

<!--          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>-->
<!--          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>-->
<!--      </table>-->
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {

    this.getUserData();
    console.log(this.users);
    // console.log(data);
    // this.populateTable();

    // console.log(dataSource);
  }

  populateTable() {
    // this.dataSource = new MatTableDataSource();
  }

  getUserData() {
    this.users = this.apiService.getUsers();
  }

}
