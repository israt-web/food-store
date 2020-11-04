import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/auth.guard';
import { ProfileInformationComponent } from './components/profile-information/profile-information.component';
import { ProfileComponent } from './components/profile/profile.component';

const profileRoutes: Routes = [
    {
      path: '',
      component: ProfileComponent ,canActivate: [AuthGuard],
      children: [
        {
          path: 'info' ,  component: ProfileInformationComponent
        },
        { path: '', redirectTo: '/account/info', pathMatch: 'prefix'},
      
     
  
      ],
    },
  ];



  
@NgModule({
    imports: [ CommonModule,RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
  })
  export class ProfileRoutingModule { }