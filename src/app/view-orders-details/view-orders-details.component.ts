import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/Order';
import { NotifierService } from '../Notifier/notifier.service';

@Component({
  selector: 'app-view-orders-details',
  templateUrl: './view-orders-details.component.html',
  styleUrls: ['./view-orders-details.component.css']
})
export class ViewOrdersDetailsComponent implements OnInit{
  constructor(private order:OrderService,
    private msg:NotifierService) {
    
  }

  orders:Order[]=[];

  totalAmount:any;

  ngOnInit(): void {
    this.loadAllOrders();
    this.getTotalAmount();
  }

  loadAllOrders(){
    this.order.getAllOrders().subscribe((response)=>{
      this.orders=response;
      console.log(response);
    },
    (error)=>{
      this.msg.showNotification("faild to load orders","OK");
    });
  }

  getTotalAmount(){
    this.order.getTotalAmount().subscribe((response)=>{
      console.log(response);
      this.totalAmount=response;
    })
  }

}
