import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';
import { Restaurant } from '../model/Restaurant';
import { Menu } from '../model/Menu';
import { CardService } from '../services/card.service';
import { Card } from '../model/Card';
import { NotifierService } from '../Notifier/notifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeServiceService,
    private cardService: CardService,
    private msg: NotifierService) { }

  restaurants?: Restaurant[];
  userEmail: string = '';

  ngOnInit(): void {
   this.loadAllItem();
  }
  
    //this method reponsibel for retrive all item from the database and print them into Html
  loadAllItem(){
    this.homeService.getRestaurantsList().subscribe(data => {
      this.restaurants = data;
      const userEmail = localStorage.getItem('userEmail');
      if (userEmail !== null) {
        this.userEmail = userEmail;
      }
      console.log(this.restaurants)
    })
  }

  addToCard(data: Menu) {
    let card = new Card(
      this.userEmail,
      [data]
    );
    this.cardService.addnewItem(card).subscribe(response=>{
      this.msg.showNotification(data.itemName+ " Add Successfully", "OK");
    },
    error=>{
      this.msg.showNotification("Server Down !!!", "OK");
      alert("Yrr Sala ja he nhi rha , ek bar code dekho dubara : ")
    })
  }
  

}
