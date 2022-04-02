import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component'
import { UsersCreateComponent } from './pages/users-create/users-create.component'


const routes: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'users/create', component: UsersCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, UsersCreateComponent];
