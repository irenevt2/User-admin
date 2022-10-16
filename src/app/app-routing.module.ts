import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorHomeComponent } from './administrador/administrador-home/administrador-home.component';
import { AdministradorPageComponent } from './administrador/administrador-page/administrador-page.component';
import { AdministradorProductosComponent } from './administrador/administrador-productos/administrador-productos.component';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'administrador',
    canActivate: [AuthGuard],
    component: AdministradorPageComponent,
    children: [
      {
        path:'home',
        component: AdministradorHomeComponent
      },
      {
        path:'productos',
        component: AdministradorProductosComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
