import { Component, OnInit } from '@angular/core';
import { Card } from '../model/Card';
import { CardService } from '../services/card.service';
import { NotifierService } from '../Notifier/notifier.service';
import { BillService } from '../services/bill.service';
import { Order } from '../model/Order';
import jwtDecode from 'jwt-decode';
import { Menu } from '../model/Menu';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {




  cards: Menu[] = [];
  userEmail: any;

  constructor(private cardService: CardService,
    private msg: NotifierService,
    private bill: BillService) { }

  ngOnInit() {
    this.getAllItem();
    this.getTotalAmount();
  }

  totalAmount: string = "";

  getAllItem() {
    this.cardService.getItemByEmail().subscribe(response => {
      // Filter the cards based on user's email
      this.cards = response;
    });
  }

  deleteCard(itemNumber: number) {
    
    this.cardService.deleteCard(itemNumber).subscribe((response) => {
      this.msg.showNotification("Deleted Successfully", "OK");
      this.getAllItem();
      this.getTotalAmount();
    },

      (error) => {
        this.msg.showNotification("Network Error !!!", "OK");
      });
  }

  getTotalAmount() {
      this.bill.calculateTotalAmount().subscribe((response) => {
      this.totalAmount = String(response);
    }
    ,
      (error) => {
        alert("error");
      })
  }

  loadDetails() {
    let token: any = localStorage.getItem('token');
    let decodedToken: any = jwtDecode(token);
    this.userEmail = decodedToken.userEmail;
  }

  OrderNow() {
    this.loadDetails();
    const order = new Order(0, this.userEmail, this.cards, this.totalAmount);
    this.bill.submitBill(order).subscribe((response)=>{
      this.msg.showNotification("Order Successfully !!!","OK");
      this.bill.removeAllItems().subscribe((response)=>{
        
        this.getAllItem();
        this.getTotalAmount();
      },
      (error)=>{
        this.msg.showNotification("Server Error !!!","OK");
      })
    },
    (error)=>{
      this.msg.showNotification("Server Error !!!","OK");
    })
  }



}
