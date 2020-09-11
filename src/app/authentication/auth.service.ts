import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public http: HttpClient,
               private route: ActivatedRoute) { }

  public login(user): Observable<any> {
    const url = `${environment.baseUrl}/rest/v1/profiles/mobilelogin`;
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl' , returnUrl);
    return this.http.post(url, user);
  
  }
  public logout() {
    localStorage.removeItem('userData');
  }

  public userLoggedIn(){
    return !!localStorage.getItem('userData');
  }
}
