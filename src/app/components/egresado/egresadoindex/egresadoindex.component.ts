import { Component, OnInit } from '@angular/core';
import { EgresadosService } from 'src/app/services/egresados.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-egresadoindex',
  templateUrl: './egresadoindex.component.html',
  styleUrls: ['./egresadoindex.component.css']
})
export class EgresadoindexComponent implements OnInit {

  constructor(private egresadosService:EgresadosService, private token:TokenService) { }
  egresados;
  ngOnInit() {
    this.egresadosList();
  }

  egresadosList(){
    this.egresadosService.getlist().subscribe(response=>{
      this.egresados= response;
      console.log(response)
    })
  }
 
}
