import { Menu } from "./Menu"

export class Order {
    orderID: number;
    userEmail: string;
    menuList: Menu[];
    totalAmount: string;

    constructor(
        orderID: number,
        userEmail: string,
        menuList: Menu[],
        totalAmount: string
    ) {
        this.orderID = orderID;
        this.userEmail = userEmail;
        this.menuList = menuList;
        this.totalAmount = totalAmount;
    }
} 