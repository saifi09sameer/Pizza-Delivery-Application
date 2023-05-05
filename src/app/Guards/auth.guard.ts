import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { NotifierService } from '../Notifier/notifier.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private msg: NotifierService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticationService.isLoginStatus()) {
      return true;
    } else {
      this.authenticationService.logOut();
      this.router.navigate(['/login']);
      this.msg.showNotification("You Are Not logged in !!", "OK");
      return false;
    }


  }



}
