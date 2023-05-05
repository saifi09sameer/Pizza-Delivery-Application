export class Menu {
  itemNumber:number;
  itemName: string;
  itemDescription: string;
  itemPrice: string;
  itemRating: string;
  itemUTL: string;

  constructor(
    itemNumber:number,
    itemName: string,
    itemDescription: string,
    itemPrice: string,
    itemRating: string,
    itemUTL: string
  ) {
    this.itemNumber=itemNumber;
    this.itemName = itemName;
    this.itemDescription = itemDescription;
    this.itemPrice = itemPrice;
    this.itemRating = itemRating;
    this.itemUTL = itemUTL;
  }
}
