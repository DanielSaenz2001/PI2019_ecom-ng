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
  id;
  FK;
  ngOnInit() {
    this.listar();
    this.sugerencias();
  }
  listar(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= response;
    });
  }
  generar(ids){
    this.id=ids
  }
  detalles(ids){
    this.FK=ids
  }
  sugerencias(){
    this.sugerenciasService.getlist().subscribe(response=>{
      this.sugerenciass= response;
    })
  }
  delete(id) {
    this.sugerenciasService.delete(id).subscribe(response=>{
      this.sugerencias();
    });
  }
}
