import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { NotificationService } from '../service/notification.service';
import { SidenavService } from '../service/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData: any;
  isUserLoggedIn: boolean;
  loggedInUserName: any;

  constructor(public authService: AuthService, public notification: NotificationService,public sidenav: SidenavService) { }

  ngOnInit(): void {
    this.getUserData();

    this.notification.userData.subscribe( response => {
      this.getUserData();
  });
  }

  getUserData() {
    const userCredentials = JSON.parse(localStorage.getItem('userData'));
    this.userData = userCredentials;
    console.log(this.userData);
    this.isUserLoggedIn = false;
    if(this.userData && this.userData.firstName) {
      this.isUserLoggedIn = true;
      this.loggedInUserName = this.userData.firstName;
    }
 }
 logout() {
   this.authService.logout();
   this.notification.notifyForUserDataChange();
 }
}
