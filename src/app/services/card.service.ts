import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../model/Card';
import { Menu } from '../model/Menu';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient:HttpClient) { }

  baseURL:string="http://localhost:7879/api/Card/addNewItem";

  addnewItem(itemData:Card){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
    let requestOption={headers:httpHeader}
    return this.httpClient.post(this.baseURL,itemData,requestOption);
  }

  getItemByEmail() {
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let requestOption = { headers: httpHeader };
    let url = 'http://localhost:7879/api/Card/getItemByEmail';
    return this.httpClient.get<Menu[]>(url, requestOption);
    //
  }

  deleteCard(itemNumber:number){
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let requestOption = { headers: httpHeader };
    let url = 'http://localhost:7879/api/Card/deleteItemByID/' + itemNumber;
    return this.httpClient.delete(url,requestOption);
  }
  
 

  // getRestaurantsList(): Observable<Restaurant[]> {
  //  let httpHeader = new HttpHeaders({
  //     'Authorization':'Bearer '+ localStorage.getItem('token')
  //   });
  //  let requestOption={headers:httpHeader}
  //   console.log(JSON.stringify(localStorage.getItem('token')))
  //   return this.httpClient.get<Restaurant[]>(this.baseURL,requestOption);
  // }

}
