import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormBuilder } from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'exads-users-create',
  templateUrl: `./users-create.component.html`,
  styles: []
})
export class UsersCreateComponent implements OnInit {
  url: string;
  users: any;
  params: any;
  formGroup: any;
  submittedUsername: string;
  userData: any;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
  ) {
    this.formGroup = this.formBuilder.group({
      username: '',
      first_name: '',
      last_name: '',
      email: '',
    });
  }

  ngOnInit() {
  }

  getUser(formData) {
    this.submittedUsername = formData['username'];
    this.url = 'http://localhost:3000/users?username=' + this.submittedUsername;
    this.users = this.apiService.getUsers(this.url).subscribe(
      data => {
        this.userData = data[0].username;
      });
  }

  onSubmit(formData) {

    this.getUser(formData);

    if (this.userData != formData['username']) {
      this.url = 'http://localhost:3000/users';
      this.params = {
        "user": {
          username: formData['username'],
          first_name: formData['first_name'],
          last_name: formData['last_name'],
          email: formData['email'],
          id_status: 1,
        }
      };
      this.users = this.apiService.createUser(this.url, this.params);
    } else if (this.userData === formData['username']) {
      this._snackBar.open('User Exists!', "okay");
    } else {
      this._snackBar.open('Something went wrong', "okay");
    }
  }
}
