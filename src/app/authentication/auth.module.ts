
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { MaterialModule } from '../material/material.module';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SigninComponent, SignupComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AuthService

  ]
})
export class AuthModule { }
