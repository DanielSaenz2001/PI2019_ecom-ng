import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom-ng';
  public loggedIn: boolean;
  constructor (private Auth: AuthService){
    
  }

  ngOnInit() {
    console.log("Grupo 4");
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }
}
