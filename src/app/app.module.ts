import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
