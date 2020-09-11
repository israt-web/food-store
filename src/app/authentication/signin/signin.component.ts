import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  type: FormControl;
  emailId: FormControl;
  mobileNumber: FormControl;
  password: FormControl;
  userId: FormControl;
  isMobileLogin: boolean;
  loginTypeIcon: string;
  loginLabel: string;
  loginPlaceholder: string;
  passwordPlaceHolder: string;
  emailRegEx: any;
  hidePassword: boolean;
  loginRequest: any;

  constructor(  public fb: FormBuilder,
                public authService: AuthService,
                public snackbar: MatSnackBar,
                public router: Router,
                public notificaService: NotificationService) { }

  ngOnInit(): void {
    this.createRegistraionForm();
    this.hidePassword = true;
    this.isMobileLogin = false;
    this.loginTypeIcon = 'email';
    this.loginLabel = 'Email';
    this.loginPlaceholder = 'Enter your email';
    this.passwordPlaceHolder = 'Enter your password';
    setTimeout(() => {
      this.setLoginFormValidator();
    }, 100);
  }

  createRegistraionForm() {
    this.loginForm = this.fb.group({
      type: ['', Validators.required],
      userId: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  setLoginFormValidator() {
    this.loginForm.get('type').setValue('email');
    let userId = this.loginForm.get('userId');
    userId.clearValidators();
    userId.setValidators([Validators.required, Validators.email]);
    userId.setValue('');
    userId.updateValueAndValidity();
    this.loginForm.get('type').valueChanges.subscribe((change) => {
      let validators: ValidatorFn[];
      switch (change) {
        case 'email':
          validators = [Validators.email, Validators.required];
          this.isMobileLogin = false;
          break;

        case 'mobile':
          validators = [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern(/^\d+$/),
          ];
          this.isMobileLogin = true;
          break;
      }
      this.loginTypeIcon = this.isMobileLogin ? 'phone_android' : 'email';
      this.loginLabel = this.isMobileLogin ? 'Mobile' : 'Email';
      this.loginPlaceholder = this.isMobileLogin
        ? 'Enter your mobile'
        : 'Enter your email';
      userId = this.loginForm.get('userId');
      userId.clearValidators();
      userId.setValidators(validators);
      userId.setValue('');
      userId.updateValueAndValidity();
    });
  }

  /**
   * To frame login request schema
   */
  private setLoginRequestData() {
    const mobile = this.loginForm.value.userId;
    this.loginRequest = {
      userName: this.isMobileLogin ? mobile : this.loginForm.value.userId,
      password: this.loginForm.value.password,
      sessionId: '',
      type: this.loginForm.get('type').value,
    };
  }
  login() {
    console.log(this.loginForm.value);
    this.setLoginRequestData();
    this.authService.login(this.loginRequest).subscribe((response) => {
      if (response.code === 200) {
        localStorage.setItem('userData', response.data);
        this.snackbar.open('Logged in successfully', 'ok'), {
            duration: 5000, };
        this.router.navigateByUrl('/');
        this.notificaService.notifyForUserDataChange();
      } else {
        this.snackbar.open('Something went wrong', 'ok'), {
            duration: 5000,};
      }

    });
   
  }
}
