import { Component, OnInit } from '@angular/core';
import { EgresadosService } from 'src/app/services/egresados.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-egresadoperfil',
  templateUrl: './egresadoperfil.component.html',
  styleUrls: ['./egresadoperfil.component.css']
})
export class EgresadoperfilComponent implements OnInit {

  constructor(private egresadosService:EgresadosService, private token:TokenService) { }
  egresado;
  ngOnInit() {
    this.egresadoPerfil();

  }
  egresadoPerfil(){
    this.egresadosService.egresados(this.token.get()).subscribe(response=>{
      this.egresado=response
      console.log(response)
    })
  }

}
