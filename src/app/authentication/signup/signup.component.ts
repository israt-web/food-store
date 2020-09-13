import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  countryCode: string;
  isInProgress: boolean;
  isMobileSignup: boolean;
  signupForm: FormGroup;
  signupLabel: string;
  signupPlaceholder: string;
  signupTypeIcon: string;
  signupType: string;
  hidePassword: boolean;
  namePlaceHolder: string;
  emailRegEx: RegExp;

  constructor( public fb: FormBuilder,
               public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.hidePassword = true;
    this.signupType  = 'email';
    this.isMobileSignup = false;
    this.signupTypeIcon = 'email';
    this.signupLabel = 'Email';
    this.signupPlaceholder = 'Enter your email';
    this.namePlaceHolder = 'Full name';
    this.createSignupForm();
    this.getCountryCode();
    setTimeout(() => {   this.setSignupFormValidator();  }, 100);
  }


  getCountryCode() {
    debugger
    // localStorage.getItem('countryId').
    const countryId = localStorage.getItem('countyId');
    this.countryCode = countryId;
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return (charCode >= 48 && charCode <= 57);
  }

  createSignupForm() {
    this.signupForm = new FormBuilder()
      .group({
        type:       new FormControl('', Validators.required),
        userId:     new FormControl('', Validators.email),
        name:       new FormControl('', Validators.required)
      });
  }

  setSignupFormValidator () {
    this.signupForm.get('type').setValue('email');
    let userId = this.signupForm.get('userId');
    userId.clearValidators();
    userId.setValidators([Validators.pattern(this.emailRegEx), Validators.required]);
    userId.setValue('');
    userId.updateValueAndValidity();
    this.signupForm.get('type').valueChanges.subscribe(change => {
      let validators: ValidatorFn[];
      switch (change) {
        case 'email':
          validators = [Validators.pattern(this.emailRegEx), Validators.required];
          this.isMobileSignup = false;
          break;

        case 'mobile':
          validators = [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern(/^\d+$/)];
          this.isMobileSignup = true;
          break;
      }
      this.signupTypeIcon = (this.isMobileSignup) ? 'phone_android' : 'email';
      this.signupLabel = (this.isMobileSignup) ? 'Mobile' : 'Email';
      this.signupPlaceholder = (this.isMobileSignup) ? 'Enter your mobile' : 'Enter your email';
      userId = this.signupForm.get('userId');
      userId.clearValidators();
      userId.setValidators(validators);
      userId.setValue('');
      userId.updateValueAndValidity();
    });

  }

  signup () {
    this.isInProgress = true;
    // this.spinner.changeStatus(true, true);
    const signupRequest = {
      email : this.isMobileSignup ? '' : this.signupForm.value.userId,
      mobile : this.isMobileSignup ? this.signupForm.value.userId : '',
      name : this.signupForm.value.name,
      countryCode: this.countryCode
    };
    this.authService.signup(signupRequest).subscribe( response => {
      this.isInProgress = false;
      // this.spinner.changeStatus(false, false);
      if (response.code === 200) {
        response = JSON.parse(response.data);
        const signupData = {
          request : signupRequest,
          response
        };

        localStorage.setItemSubscribe('signupData', signupData);
        setTimeout(() => {
          this.router.navigateByUrl('/auth/verifyOtp');
        }, 300);
      } else {
        // this.toaster.showMessage('Unable to Signup!', response.error, 'error', 8000);
      }
    }, error => {
      this.isInProgress = false;
      // this.spinner.changeStatus(false, false);
    });

  }
}
