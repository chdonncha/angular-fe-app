import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exads-users',
  template: `
    <p><button mat-raised-button color="primary">New User</button>
      users no work!
    </p>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
