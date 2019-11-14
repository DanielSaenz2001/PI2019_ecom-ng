import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private Jarwis: JarwisService, private token:TokenService) { }

  ID;
  public list;
  ngOnInit() {
    this.listar();
    
  }
  listar(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= response;
      console.log("datos: ", response)
       // this.list= JSON.stringify(response ); console.log("datos: ", response)
    });
  }
  id(id){
    this.ID = id;
  }

}
