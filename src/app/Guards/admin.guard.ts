import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { NotifierService } from '../Notifier/notifier.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private msg: NotifierService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRole = this.authenticationService.getRole();
    if (userRole === 'Admin') {
      return true;
    } else if (userRole === 'User') {
      this.msg.showNotification('You are not authorized to access this page!', 'OK');
      this.router.navigateByUrl('home');
      return false;
    } else {
      this.authenticationService.logOut();
      this.router.navigateByUrl('/login');
      this.msg.showNotification('You are not authorized to access this page!', 'OK');
      return false;
    }
  }
}
