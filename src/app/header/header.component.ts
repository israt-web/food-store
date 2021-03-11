import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { CartService } from '../product/service/cart.service';
import { NotificationService } from '../service/notification.service';
import { SidenavService } from '../service/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData: any;
  isUserLoggedIn: boolean;
  loggedInUserName: any;
  private cartProductCount: number = 0;

  constructor(
    public authService: AuthService,
    public notification: NotificationService,
    public sidenav: SidenavService,
    public cart: CartService
  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.notification.userData.subscribe((response) => {

      this.getUserData();
    });

  }

  getUserData() {
    const userCredentials = JSON.parse(localStorage.getItem('userData'));
    this.userData = userCredentials;
    // console.log(this.userData);
    this.isUserLoggedIn = false;
    if (this.userData && this.userData.firstName) {
      this.isUserLoggedIn = true;
      this.loggedInUserName = this.userData.firstName;
    }
  }
  logout() {
    this.authService.logout();
    this.notification.notifyForUserDataChange();
  }

  open(menu) {
    menu.openMenu();
  }
}
