import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import { SingupComponent } from './singup/singup.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
  AuthenticationComponent,
  LoginComponent,
  SingupComponent
],
  imports: [
    CommonModule,
    MatCardModule,
    AuthenticationRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule

  ]
})
export class AuthenticationModule { }
