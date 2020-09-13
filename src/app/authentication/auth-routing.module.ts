
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { OtpComponent } from './auth/otp/otp.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'verifyOtp',
        component: OtpComponent,
        data: { title: 'verifyOtp', submitGTag: true}
      }
   

    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AuthRoutingModule { }
