import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public http: HttpClient) { }

  public login(user): Observable<any> {
    const url = `${environment.baseUrl}/rest/v1/profiles/mobilelogin`;
    return this.http.post(url, user);
  
  }
  public logout() {
    localStorage.removeItem('userData');
  }
}
