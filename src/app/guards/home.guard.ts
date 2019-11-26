import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from '../services/token.service';
import { JarwisService } from '../services/jarwis.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log()
    if(this.Token.loggedIn() == true){
      return true;
    }else{
      this.router.navigate(['login']);
    }
    
  }
  constructor(private Token: TokenService, public router: Router) { 
    
  }
}
