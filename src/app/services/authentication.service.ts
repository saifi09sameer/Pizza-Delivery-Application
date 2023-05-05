import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  private Role = "";

  private isLogin = false;

  setToAdmin(){
    this.Role="Admin";
  }
  setToUser(){
    this.Role="User";
  }
  getRole(){
    return this.Role;
  }

  login(){
    this.isLogin=true;
  }
  logOut(){
    this.isLogin=false;
  }
  isLoginStatus():boolean{
    return this.isLogin;
    
  }
  removeToken(){
    localStorage.clear();
  }
  
}
