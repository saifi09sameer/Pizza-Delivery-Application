import { Menu } from "./Menu";

export class Restaurant {
  restaurantID: number;
  restaurantName: string;
  restaurantAddress: string;
  restaurantPhoneNumber: string;
  menuList: Menu[];
  

  constructor(
    restaurantID: number,
    restaurantName: string,
    restaurantAddress: string,
    restaurantPhoneNumber: string,
    menuList: Menu[]
  ) {
    this.restaurantID = restaurantID;
    this.restaurantName = restaurantName;
    this.restaurantAddress = restaurantAddress;
    this.restaurantPhoneNumber = restaurantPhoneNumber;
    this.menuList = menuList;
  }

}
