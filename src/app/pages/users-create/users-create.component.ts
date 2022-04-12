import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'exads-users-create',
  templateUrl: `./users-create.component.html`,
  styles: []
})
export class UsersCreateComponent implements OnInit {
  url: string;
  users: any;
  userExample: any;
  params: any;
  formGroup: any;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    // public first_name: string,
    // public last_name: string,
    // public email: string,
    // public username: string,
    // public id_status: number
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

  // email= new FormControl('',[
  //   Validators.required,
  //   Validators.email
  // ]);

  onSubmit(formData) {
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


    // console.log(formData);

    // this.userExample = {
    //   "user": {
    //     "first_name": "test1",
    //     "last_name": "tester1",
    //     "email": "test1@test.com",
    //     "username": "test1",
    //     "id_status": 1,
    //   }
    // };

  }

}
