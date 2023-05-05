import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../model/Users';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient:HttpClient) { }

  // baseURL:string="http://localhost:7867/api/Authentication/register";
  loginURL:string="http://localhost:7867/api/Authentication";


  singUP(user:Users ): Observable<Object>{
    return this.httpClient.post(this.loginURL+"/register",user);
  }

  login(user:User){
    return this.httpClient.post(this.loginURL+"/login",user);
  }

  getAllUsers(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
    let requestOption={headers:httpHeader}
    return this.httpClient.get<Users[]>("http://localhost:7867/api/Authentication/getAllUsers",requestOption);
  }

  deleteByEmailID(userEmail:string){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
    let requestOption={headers:httpHeader}
    return this.httpClient.delete("http://localhost:7867/api/Authentication/deleteByUserEmail/"+userEmail,requestOption);
  }


}
