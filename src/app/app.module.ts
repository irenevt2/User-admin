import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { AdministradorPageComponent } from './administrador/administrador-page/administrador-page.component';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministradorHomeComponent } from './administrador/administrador-home/administrador-home.component';
import { AdministradorProductosComponent } from './administrador/administrador-productos/administrador-productos.component';
import { ProductoListComponent } from './administrador/productos/producto-list/producto-list.component';
import { ProductoFormComponent } from './administrador/productos/producto-form/producto-form.component';
import { ProductoDetalleComponent } from './administrador/productos/producto-detalle/producto-detalle.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUserComponent,
    AdministradorPageComponent,
    LoginComponent,
    LoginPageComponent,
    AdministradorHomeComponent,
    AdministradorProductosComponent,
    ProductoListComponent,
    ProductoFormComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
