import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from '../../../core/services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService,private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit() {
    this.getData();
    this.getLocalData();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  getLocalData() {
    this.http.get('http://sms.akst.in/public/users').subscribe((data) => {
      console.log(data);
    });
  }
  

  getData() {
    this.http.get('http://18.213.144.230:11001/api/patient/dashboard/home?patientId=AF68E293-6A7C-48FA-816B-4FA07F15F20D&providerId=AF68E293-6A7C-48FA-816B-4FA07F15F20D&subject=AF68E293-6A7C-48FA-816B-4FA07F15F20D&').subscribe((data) => {
      console.log(data);
    });
  }

  ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
  
   let postData = {
    "username": this.f.email.value,
    "password": this.f.password.value
   };

    this.http.post('https://cors-anywhere.herokuapp.com/http://sms.akst.in/public/api/signin', postData, { headers: headers })
    .subscribe(
      data => {
        
        const dt = data;

       if(dt['user']){
         console.log(dt['user']);
         const user = dt['user'];
        // store user details and jwt in cookie
        this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
        this.router.navigate([this.returnUrl]);
       }
       else
       {
        this.error = 'Invalid Login';
       }
         
        return false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );

    /*
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
    */

  }
}
