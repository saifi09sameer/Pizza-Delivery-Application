export class Users {
    userEmail: string;
    userPassword: string;
    userName:string;
    userPhoneNumber: string;
    userAddress :string;

    constructor
    (
        userEmail: string,
        userPassword: string,
        userName:string,
        userPhoneNumber: string,
        userAddress :string
    )
    
    {
        this.userEmail=userEmail;
        this.userPassword=userPassword;
        this.userName=userName;
        this.userPhoneNumber=userPhoneNumber;
        this.userAddress=userAddress;
    }
}
  