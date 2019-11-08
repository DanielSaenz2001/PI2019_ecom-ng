import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { HttpEventType , HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient,private Jarwis: JarwisService, private token:TokenService) { }

  
  public list;
  ngOnInit() {
    this.listar();
  }
  listar(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= response;
    });
  }
  

}
