import { Component } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from '../model/Menu';
import { ItemAddService } from '../services/item-add.service';
import { NotifierService } from '../Notifier/notifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css']
})
export class AddNewFoodComponent {
  constructor(private formBuilder: FormBuilder,
    private itemAddService:ItemAddService,private msg: NotifierService,
    private route: Router) { }

  enuForm!: FormGroup;

  ngOnInit(): void {
    this.enuForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemDescription: ['', Validators.required],
      itemPrice: ['', Validators.required],
      itemRating: ['', Validators.required],
      itemUTL: ['', Validators.required],
    });
  }

  addNewFood() {
    let menu = new Menu(
      0,
      this.enuForm.get('itemName')?.value,
      this.enuForm.get('itemDescription')?.value,
      this.enuForm.get('itemPrice')?.value,
      this.enuForm.get('itemRating')?.value,
      this.enuForm.get('itemUTL')?.value
    );

    let restaurant = new Restaurant(
      786,
      "",
      "",
      "",
      [menu]
    );

    console.log(restaurant);

    this.itemAddService.addNewItem(restaurant).subscribe(
      (response) => {
        this.enuForm.reset();
        this.msg.showNotification("Item added successfully", "OK");
      },
      (error) => {
        this.msg.showNotification("Server Error !!!", "OK");
      }
    );
  }

  cancel() {
    this.route.navigateByUrl("Admin");
  }
  
}
