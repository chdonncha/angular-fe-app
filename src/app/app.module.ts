import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// import { UsersComponent } from './pages/users/users.component';
// import { UsersCreateComponent } from './pages/users-create/users-create.component';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        // UsersCreateComponent,
        // UsersComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
