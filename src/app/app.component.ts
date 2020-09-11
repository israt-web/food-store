import { Component } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private authService: AuthService, router: Router){
  //  if(authService.userLoggedIn){
  //   const returnUrl= localStorage.getItem('returnUrl');
  //   router.navigateByUrl(returnUrl);
  //  }
  }
}
