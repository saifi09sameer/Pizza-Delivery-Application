import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  getAllMenus(): any {
    
  }

  constructor(private httpClient:HttpClient) { }
  
  baseURL:string="http://localhost:7868/api/Restaurant/getRestaurant";
  getRestaurantsList(): Observable<Restaurant[]> {
   let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
   let requestOption={headers:httpHeader}
    console.log(JSON.stringify(localStorage.getItem('token')))
    return this.httpClient.get<Restaurant[]>(this.baseURL,requestOption);
  }

  // getRestaurantsList(): Observable<Restaurant[]> {
  //   return this.httpClient.get<Restaurant[]>(this.baseURL);
  // }
}
