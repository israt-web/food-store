import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit(): void {
    const userCredentials = JSON.parse(localStorage.getItem('userData'));
    this.user = userCredentials;
  }

}
