import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
 
  constructor(private authService: AuthService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
    const { username, email, password } = this.form;
 
    this.authService.register(username, email, password, "ROLE_USER").subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("User Registration successful, please login to your account")
        this.router.navigate(["login"]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
