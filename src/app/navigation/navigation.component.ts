import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscribable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

   


  constructor(private breakpointObserver: BreakpointObserver,private authentication:AuthenticationService,
   ) {}
  currentTime?: Date;
 
  ngOnInit(): void {
    
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    
  }
  

}
