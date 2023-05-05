import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { User } from '../model/User';
import { NotifierService } from '../Notifier/notifier.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.authentication.removeToken();
    this.authentication.logOut();
  }

  constructor(private loginService: LoginServiceService, 
    private router: Router, 
    private msg: NotifierService,
    private authentication:AuthenticationService) { }

  userForm = new FormGroup({
    "userEmail": new FormControl(''),
    "userPassword": new FormControl('')
  })

  user = new User();

  

  responseData: any;
  login(): void {
    if (this.user != null) {
      this.loginService.login(this.user).subscribe(
        response => {
          this.responseData = response;
          this.msg.showNotification("You Have To First Register !!!", "OK");
          console.log(response);
          localStorage.setItem('token', this.responseData.Token);
          localStorage.setItem('userName',this.responseData.userName);
          localStorage.setItem('userEmail',this.responseData.userEmail);
          localStorage.setItem('userAddress',this.responseData.userAddress);
          localStorage.setItem('userPhoneNumber',this.responseData.userPhoneNumber);
          localStorage.setItem('userRole',this.responseData.userRole);
          this.authentication.login();
          if(this.responseData.userRole=="Admin"){
           
            this.router.navigateByUrl('Admin');
            this.msg.showNotification("Admin Login Successfully", "OK");
            this.authentication.setToAdmin();
          }else if(this.responseData.userRole=="User"){
            this.router.navigateByUrl('home');
            this.msg.showNotification(" User Login Successfully", "OK");
            this.authentication.setToUser();
          }
        },
        error => {
          this.msg.showNotification("You Are Not User .", "OK");
          this.router.navigateByUrl('/login');
        }
      );
    } 
  }
 
}

