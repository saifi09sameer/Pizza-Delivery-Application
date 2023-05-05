import { Component, OnInit } from '@angular/core';
import { Users } from '../model/Users';
import { LoginServiceService } from '../services/login-service.service';
import { NotifierService } from '../Notifier/notifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  constructor(private loginServiceService:LoginServiceService,private msg:NotifierService,
    private router: Router){}

  users: Users[] = [];

  ngOnInit(): void {
    this.loadAllUsers();
  }

  deleteUser(user:Users){
    this.loginServiceService.deleteByEmailID(user.userEmail).subscribe((response)=>{
      this.loadAllUsers();
      this.msg.showNotification(user.userName+ "Deleted Successfully !!!","OK");
    },
    (error)=>{
      this.msg.showNotification("Network Error !!!","OK");
      this.router.navigateByUrl("/login");
    })
  }

  loadAllUsers(){
    this.loginServiceService.getAllUsers().subscribe((response)=>{
      this.users=response;
    },
    (error)=>{
     this.msg.showNotification("Server Error.....!!!","OK")
    })
  }
}
