import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormBuilder } from "@angular/forms";

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

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
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
  }
}
