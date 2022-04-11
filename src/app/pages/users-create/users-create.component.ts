import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'exads-users-create',
  template: `
      <mat-card>
          <mat-card-title>
              Add New User
          </mat-card-title>
          <mat-card-content>
              <form>
                  <table>
                      <tr>
                          <mat-form-field appearance="fill">
                              <mat-label>Username</mat-label>
                              <input matInput>
                          </mat-form-field>
                      </tr>
                      <tr>
                          <td>
                              <mat-form-field appearance="fill">
                                  <mat-label>First Name</mat-label>
                                  <input matInput>
                              </mat-form-field>
                          </td>
                          <td>
                              <mat-form-field appearance="fill">
                                  <mat-label>Last Name (Optional)</mat-label>
                                  <input matInput>
                              </mat-form-field>
                          </td>
                      </tr>
                      <tr>
                          <mat-form-field appearance="fill">
                              <input matInput>
                              <mat-label>Email</mat-label>
                              <input matInput>
                          </mat-form-field>
                      </tr>
                      <tr>
                          <mat-card-actions fxLayout="row" fxLayoutAlign="end center">
                          </mat-card-actions>
                          <mat-grid-list cols="4" rowHeight="50px">
                              <mat-grid-tile>
                                  <button mat-raised-button>CANCEL</button>
                              </mat-grid-tile>
                              <mat-grid-tile></mat-grid-tile>
                              <mat-grid-tile>
<!--                                  <button mat-raised-button type="button" (click)="createUser($event)">ADD NEW USER</button>-->
                                  <button mat-raised-button type="submit" (click)="createUser($event)">ADD NEW USER</button>
                              </mat-grid-tile>
                              <mat-grid-tile></mat-grid-tile>
                          </mat-grid-list>
                      </tr>
                  </table>
              </form>
          </mat-card-content>
      </mat-card>
  `,
  styles: []
})
export class UsersCreateComponent implements OnInit {
  url: string;
  users: any;
  userExample: any;
  params: any;
  formGroup: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  email= new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  createUser(event) {
    this.url = 'http://localhost:3000/users';
    this.params = {

    };

    // this.userExample = {
    //   "user": {
    //     "first_name": "test1",
    //     "last_name": "tester1",
    //     "email": "test1@test.com",
    //     "username": "test1",
    //     "id_status": 1,
    //   }
    // };

    this.users = this.apiService.createUser(this.url, this.userExample);

    console.log(this.users);
    console.log("howya");
  }

}
