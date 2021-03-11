import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public countryCode = '+91';
  signupObject: any = {
    name: '',
    mobileTelecomCode: '',
    mobileNumber: '',
    email: '',
    expressSignup: true,
    profileTypeId: 'PT000006',
    profileTypeName: 'I\'ll tell later',
    businessTypeId: 'BT000012',
    businessTypeName: 'I\'ll tell later',
    nativeBusinessTypeId: 'BT000012',
    nativeBusinessTypeName: 'I\'ll tell later',
    businessName: '',
    organizationName: '',
    password: '12345678',
    address: 'Hyderabad, Telangana, India',
    googleLocationTo: {
      locality: 'Hyderabad',
      adminLevel2: 'Hyderabad',
      adminLevel1: 'Telangana',
      countryName: 'India',
      latitude: '17.385044',
      longitude: '78.486671'
    },
    lstOfProducts: [],
    studentDetails: {
      universityName: '',
      universityKey: '',
      degreeName: '',
      courseId: '',
      courseName: '',
      courseStartYear: '',
      courseEndYear: ''
    },
    industryId: '',
    companyName: '',
    jobDescription: '',
    sourcePortal: 'FARMER'
  };



  constructor(public http: HttpClient,
    private route: ActivatedRoute, private router: Router) { }

  public login(user): Observable<any> {
    const url = `${environment.baseUrl}/rest/v1/profiles/mobilelogin`;
    // const url = 'https://marketplace.kalgudi.com/v2/auth/login'
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.http.post(url, user);

  }

  public signup(request: any): Observable<any> {
    const url = `${environment.baseUrl}/rest/v1/profiles/mobilelogin`;
    this.signupObject.email = request.email;
    this.signupObject.mobileTelecomCode = request.countryCode;
    this.signupObject.mobileNumber = (request.email ? '' : request.countryCode) + request.mobile;
    this.signupObject.name = request.name;
    return this.http.post(url, this.signupObject).pipe(map(data => {
      // debugger
      return data;
    }));
  }


  public getCountryCode(): Observable<any> {
    // debugger
    const url = `${environment.baseUrl}/rest/v1/profiles/coudtls`;
    return this.http.get(url).pipe(map(data => {
      let response: any = data;
      response = JSON.parse(response.data);
      localStorage.setItem('countryDetails', response);
      localStorage.setItem('countryId', response.MobileTelecomcode);
      localStorage.setItem('mobileTelecomCode', response.MobileTelecomcode);
      return response.MobileTelecomcode;
    }));
  }


  public logout() {
    localStorage.removeItem('userData');
    this.router.navigateByUrl('/');
  }

  public userLoggedIn() {
    return !!localStorage.getItem('userData');
  }
}
