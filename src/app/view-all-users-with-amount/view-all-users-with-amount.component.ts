import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { NotifierService } from '../Notifier/notifier.service';

@Component({
  selector: 'app-view-all-users-with-amount',
  templateUrl: './view-all-users-with-amount.component.html',
  styleUrls: ['./view-all-users-with-amount.component.css']
})
export class ViewAllUsersWithAmountComponent implements OnInit{
  constructor(private admin:AdminService,private msg :NotifierService){}
  ngOnInit(): void {
    this.loadAllUsersWithAmount();
    this.loadTotalAmountOfAllUsers();
  }
  
  allData:any;
  totalAmount:any;

  loadAllUsersWithAmount(){
    this.admin.getAllUsersWithAmount().subscribe((response)=>{
      this.allData=response;
      console.log(this.allData);
    },
    (error)=>{
      this.msg.showNotification("Data Not Loaded","OK");
    })
  }
  loadTotalAmountOfAllUsers(){
    this.admin.getTotalAmountOfAllUsers().subscribe((response)=>{
      this.totalAmount=response;
      console.log(this.totalAmount);
    },
    (error)=>{
      this.msg.showNotification("Data Not Loaded","OK");
    })
  }


}
