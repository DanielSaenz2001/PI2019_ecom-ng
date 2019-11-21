import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresasindex',
  templateUrl: './empresasindex.component.html',
  styleUrls: ['./empresasindex.component.css']
})
export class EmpresasindexComponent implements OnInit {

  constructor(private empresasService:EmpresasService) { }
  empresas;
  ngOnInit() { 
    this.empresasList()
  }
  empresasList(){
    this.empresasService.getlist().subscribe(response=>{
      this.empresas= response;
      console.log(response)
    })
  }
}
