import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { SugerenciasService } from 'src/app/services/sugerencias.service';

@Component({
  selector: 'app-sugerenciasindex',
  templateUrl: './sugerenciasindex.component.html',
  styleUrls: ['./sugerenciasindex.component.css']
})
export class SugerenciasindexComponent implements OnInit {
  sugerenciass: any;

  constructor(private Jarwis: JarwisService, private token:TokenService, private sugerenciasService:SugerenciasService) { }
  list;
  id
  ngOnInit() {
    this.listar();
    this.sugerencias();
  }
  listar(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= response;
      console.log("datos: ", response)
       // this.list= JSON.stringify(response ); console.log("datos: ", response)
    });
  }
  generar(ids){
    this.id=ids
  }
  sugerencias(){
    this.sugerenciasService.getlist().subscribe(response=>{
      this.sugerenciass= response;
    })
  }
}
