import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Users } from '../model/Users';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private router: Router) { }

  viewUsers() {
    this.router.navigate(['/view-details']);
  }

  addFoods() {
    this.router.navigate(['/addNewItem']);
  }
  viewAllItems(){
    this.router.navigate(['/view-all-items']);
  }
  viewAllUsersWithAmount(){
    this.router.navigate(['/app-view-all-users-with-amount']);
  }

}
