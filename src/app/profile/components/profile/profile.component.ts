import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: string;

  constructor() { }

  ngOnInit(): void {
    const userCredentials = JSON.parse(localStorage.getItem('userData'));
    this.userData = userCredentials;
    console.log(this.userData)
  }

}
