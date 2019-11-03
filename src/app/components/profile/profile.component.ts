import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private Jarwis: JarwisService, private token:TokenService) { }
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  list;
  ngOnInit() {
    this.listar();
  }
  listar(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= Array.of(response);
    });
  }
}
