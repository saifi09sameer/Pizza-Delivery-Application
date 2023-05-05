import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  getAllOrders(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
    let requestOption={headers:httpHeader}
    return this.httpClient.get<Order[]>("http://localhost:6878/api/Order/GetAllOrders",requestOption);
  }
  getTotalAmount(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
    let requestOption={headers:httpHeader}
    return this.httpClient.get("http://localhost:6878/api/Order/getTotalAmount",requestOption);
  }
  
}
