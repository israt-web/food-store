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
  productsInCart: any[];

  constructor(
    public authService: AuthService,
    public notification: NotificationService,
    public sidenav: SidenavService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.notification.userData.subscribe((response) => {
      this.getUserData();
    });



  }

  calcTotal() {
    this.cartService.items$.subscribe(p => {
      this.productsInCart = p;
    });
    return this.productsInCart.reduce((acc, pr) => acc += pr.productQuantity, 0);
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
