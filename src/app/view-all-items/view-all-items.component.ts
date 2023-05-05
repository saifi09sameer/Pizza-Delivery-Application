import { Component } from '@angular/core';
import { Menu } from '../model/Menu';
import { Card } from '../model/Card';
import { HomeServiceService } from '../services/home-service.service';
import { CardService } from '../services/card.service';
import { NotifierService } from '../Notifier/notifier.service';
import { Restaurant } from '../model/Restaurant';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-view-all-items',
  templateUrl: './view-all-items.component.html',
  styleUrls: ['./view-all-items.component.css']
})
export class ViewAllItemsComponent {
  constructor(private homeService: HomeServiceService, 
    private cardService: CardService,
    private msg: NotifierService,
    private admin:AdminService) { }

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
    })
  }


  addToCard(itemNumber:number) {
    this.admin.deleteItemByID(itemNumber).subscribe((response)=>{
      if(response==true){
        this.msg.showNotification("Item Deleted Successfully ","OK");
      }
      this.loadAllItem();
      console.log(response);
    },
    (error)=>{
      this.msg.showNotification("Server Error ","OK");
    })
   alert(itemNumber);
  }
}
