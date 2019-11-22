import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public loggedIn: boolean;
  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private Jarwis: JarwisService
  ) { }
  list;
  
  USERID;
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.listar();
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
  listar(){
    this.Jarwis.me(this.Token.get()).subscribe(
      data => this.handleResponse(data),
      error => this.handleError()
    );
  }
  handleResponse(data) {
    this.list= data;
  }
  handleError() {
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
  public error = null;
  filedata:any;
  fileEvent(e){
        this.filedata = e.target.files[0];
  }
  onSubmit(f: NgForm) {
    var myFormData = new FormData();
    myFormData.append('id', this.USERID);
    myFormData.append('image', this.filedata);
    this.Jarwis.profile(myFormData);
    this.listar();
  } 
  userProfile(id){
    this.USERID = id;
  }
}
