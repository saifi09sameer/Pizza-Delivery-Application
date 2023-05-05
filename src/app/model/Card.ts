import { Menu } from "./Menu";
// export class Card {
//   itemNumber: number;
//   userEmail: string;
//   itemName: string;
//   itemDescription: string;
//   itemPrice: string;
//   itemRating: string;
//   itemUTL: string;

//   constructor
//   (
//     itemNumber: number,
//     userEmail: string,
//     itemName: string,
//     itemDescription: string,
//     itemPrice: string,
//     itemRating: string,
//     itemUTL: string
//   ) 
//   {
//     this.itemNumber = itemNumber;
//     this.userEmail = userEmail;
//     this.itemName = itemName;
//     this.itemDescription = itemDescription;
//     this.itemPrice = itemPrice;
//     this.itemRating = itemRating;
//     this.itemUTL = itemUTL;
//   }
// }

export class Card {
  userEmail: string;
  menuList: Menu[];

  constructor(
    userEmail: string,
    menuList: Menu[]
  ) 
  {
    this.userEmail = userEmail;
    this.menuList = menuList;
  }
}



