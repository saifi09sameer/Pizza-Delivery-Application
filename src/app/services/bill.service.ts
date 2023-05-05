import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private httpClient:HttpClient) { }

  baseURL:string="http://localhost:7879/api/Card/calculateTotalAmount";

  calculateTotalAmount(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
   let requestOption={headers:httpHeader}
   return this.httpClient.get(this.baseURL,requestOption);
  }

  submitBill(billData:Order){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
   let requestOption={headers:httpHeader}
   return this.httpClient.post("http://localhost:6878/api/Order/addNewOrder",billData,requestOption);
  }
  removeAllItems(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
    let requestOption={headers:httpHeader}
    return this.httpClient.delete("http://localhost:7879/api/Card/deleteAllCard",requestOption);
  }
}


