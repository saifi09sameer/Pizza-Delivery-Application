import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  deleteItemByID(itemNumber:number){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
   let requestOption={headers:httpHeader}
   let url = 'http://localhost:7868/api/Restaurant/deleteItemByAdmin/' + itemNumber;
   return this.httpClient.delete(url,requestOption);
  }
  getAllUsersWithAmount(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
   let requestOption={headers:httpHeader}
   let url = 'http://localhost:6878/api/Order/getTotalAmountWithUsersInformation';
   return this.httpClient.get(url,requestOption);
  }
  getTotalAmountOfAllUsers(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
   let requestOption={headers:httpHeader}
   let url = 'http://localhost:6878/api/Order/getTotalAmountOfAllUsers';
   return this.httpClient.get(url,requestOption);
  }
}
