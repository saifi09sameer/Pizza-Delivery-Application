import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(private snackBar:MatSnackBar) { }
  showNotification(displayMessage:string,buttonText:string){
    this.snackBar.open(displayMessage, buttonText, {
      duration: 1200,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
  
}
