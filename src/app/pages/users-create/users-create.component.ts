import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormControl, Validators } from "@angular/forms";

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
