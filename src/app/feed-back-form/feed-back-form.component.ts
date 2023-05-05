import { Component } from '@angular/core';
import { Feedback } from '../model/Feedback';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.css']
})
export class FeedBackFormComponent {
  constructor(private snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }

  

}
