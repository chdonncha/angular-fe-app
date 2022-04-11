import { Component, OnInit } from '@angular/core';

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
                          <mat-grid-list cols="2 rowHeight="1:1">
                              <mat-grid-tile>
                                  <button mat-raised-button>CANCEL</button>
                              </mat-grid-tile>
                              <mat-grid-tile></mat-grid-tile>
                              <mat-grid-tile>
                                  <button mat-raised-button>ADD NEW USER</button>
                              </mat-grid-tile>
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

  constructor() {
  }

  ngOnInit() {
  }

}
