import { Component } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../model/Users';
import { NotifierService } from '../Notifier/notifier.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  constructor(private loginService: LoginServiceService, private router: Router, private msg: NotifierService,
    private fb: FormBuilder) { }


  userForm!: FormGroup;


  ngOnInit(): void {
    this.userForm = this.fb.group(
      {
        userName: ['', Validators.required],
        userEmail: ['', [Validators.required, Validators.email]],
        userPassword: ['', Validators.required],
        userPhoneNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
        userAddress: ['', [Validators.required, Validators.maxLength(100)]]
      }
    );
  }

  signUP() {
    const userData = this.userForm.value;
    const user = new Users(
      userData.userEmail,
      userData.userPassword,
      userData.userName,
      userData.userPhoneNumber,
      userData.userAddress);

    this.loginService.singUP(user).subscribe(
      () => {
        this.userForm.reset();
        this.msg.showNotification(user.userName + " Successfully Registered", "Done");
        this.router.navigateByUrl("/login");
      },
      error => {
        console.log(error)
      }
    )
  }
  canExit() {
    const name = this.userForm.get('userName')?.value;
    const email = this.userForm.get('userEmail')?.value;
    const password = this.userForm.get('userPassword')?.value;
    const role = this.userForm.get('userPhoneNumber')?.value;
    const address = this.userForm.get('userAddress')?.value;

    if (name || email || password || role || address) {
      return confirm('Do you really want to leave this page ?');
    } else {
      return true;
    }
  }

}
