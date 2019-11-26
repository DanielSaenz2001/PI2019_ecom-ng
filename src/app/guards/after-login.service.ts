import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from '../services/token.service';
import { JarwisService } from '../services/jarwis.service';

@Injectable()
export class AfterLoginService implements CanActivate {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log("bbbbbb")
    console.log(this.authStatus)
    return this.Token.loggedIn();
    
  }
  constructor(private Token: TokenService,private d:JarwisService) { 
    
  }
  

}
