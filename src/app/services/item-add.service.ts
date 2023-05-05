import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../model/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class ItemAddService {

  constructor(private httpClient:HttpClient) { }

  baseURL:string="http://localhost:7868/api/Restaurant/updateRestaurant";

  addNewItem(data:Restaurant){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
    let requestOption={headers:httpHeader}
    console.log()
    return this.httpClient.put(this.baseURL,data,requestOption);
  }
}
