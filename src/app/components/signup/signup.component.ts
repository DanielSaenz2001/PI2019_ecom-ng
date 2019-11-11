import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  @Input() personaID:string;
  @Input() email:string;
  
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    personaid: null
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }
  onSubmit() {
    this.form.personaid= this.personaID;
    this.form.email= this.email;
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
    
  }
  verdatos(){
    console.log("DAtos:", this.personaID , "  ", this.email)
  }
}
