import { Component, OnInit } from '@angular/core';
import { EgresadosService } from 'src/app/services/egresados.service';

@Component({
  selector: 'app-egresadoindex',
  templateUrl: './egresadoindex.component.html',
  styleUrls: ['./egresadoindex.component.css']
})
export class EgresadoindexComponent implements OnInit {

  constructor(private egresadosService:EgresadosService) { }
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
