import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SingupComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
  exports: [RouterModule],

  })
  export class AuthenticationRoutingModule { }
