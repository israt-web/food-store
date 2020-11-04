import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from '../material/material.module';
import { ProfileService } from './service/profile.service';
import { ProfileInformationComponent } from './components/profile-information/profile-information.component';



@NgModule({
  declarations: [ ProfileComponent, ProfileInformationComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
  ],
  exports: [],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
