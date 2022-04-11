import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'exads-users',
  template: `
      <mat-card>
          <mat-card-content>
              <table>
                  <tr>
                      <button mat-raised-button color="primary" routerLink="/users/create">Primary</button>
                  </tr>
                  <tr>
                      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">

                          <mat-paginator #paginator [pageSizeOptions]="[2, 4, 6]"
                                         showFirstLastButtons></mat-paginator>

                          <!-- Username -->
                          <ng-container matColumnDef="username">
                              <th mat-header-cell *matHeaderCellDef> Username</th>
                              <td mat-cell *matCellDef="let element"> {{element.username}} </td>
                          </ng-container>

                          <!-- Full Name -->
                          <ng-container matColumnDef="full_name">
                              <th mat-header-cell *matHeaderCellDef> Full Name</th>
                              <td mat-cell
                                  *matCellDef="let element"> {{element.first_name}} {{ element.last_name}} </td>
                          </ng-container>

                          <!-- Email Column -->
                          <ng-container matColumnDef="email">
                              <th mat-header-cell *matHeaderCellDef> Email</th>
                              <td mat-cell *matCellDef="let element"> {{element.email}} </td>
                          </ng-container>

                          <!-- Status Column -->
                          <ng-container matColumnDef="created_date">
                              <th mat-header-cell *matHeaderCellDef> Status</th>
                              <td mat-cell *matCellDef="let element"> {{element.created_date}} </td>
                          </ng-container>

                          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
                      </table>
                  </tr>
              </table>
          </mat-card-content>
      </mat-card>
      <div *ngIf="isLoading"
           style="display: flex; justify-content: center; align-items: center; background: white;">
          <mat-progress-spinner
                  color="primary"
                  mode="indeterminate">
          </mat-progress-spinner>
      </div>

  `,
  styles: []
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['username', 'full_name', 'email', 'created_date'];
  users: any;
  isLoading = true;
  dataSource = null;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getUserData();

    // this.dataSource.paginator = this.paginator;
  }

  getUserData() {
    this.users = this.apiService.getUsers().subscribe(
      data => {
        this.isLoading = false;
        this.dataSource = data;
      },
      error => this.isLoading = false
    );
  }

}
