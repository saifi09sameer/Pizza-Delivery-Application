import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { NotifierService } from '../Notifier/notifier.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  constructor(private router: Router,private msg:NotifierService,
    private authenticationService:AuthenticationService) { }

  userAddress: any;
  userName: any;
  userEmail: any;
  role: any;
  userPhoneNumber:any;

  ngOnInit(): void {
    this.loadDetails();
  }
  
  loginStatus:any;

  loadDetails(){
    let token: any = localStorage.getItem('token');
    let decodedToken: any = jwt_decode(token);
    this.userName = decodedToken.userName;
    this.userAddress = decodedToken.userAddress;
    this.userEmail = decodedToken.userEmail;
    this.userPhoneNumber=decodedToken.userPhoneNumber;
    this.role = decodedToken.role; 
  }

  logOutFromApp() {
    if(this.authenticationService.isLoginStatus()==true){
      localStorage.clear();
      this.msg.showNotification("LogOUT Successfully","OK")
      this.router.navigateByUrl('/login');
    }else{
      this.msg.showNotification("You are Not LogedIN","OK")
    }
  }

}
