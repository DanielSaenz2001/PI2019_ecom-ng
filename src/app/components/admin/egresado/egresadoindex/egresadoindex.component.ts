import { Component, OnInit } from '@angular/core';
import { EgresadosService } from 'src/app/services/egresados.service';
import { TokenService } from 'src/app/services/token.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-egresadoindex',
  templateUrl: './egresadoindex.component.html',
  styleUrls: ['./egresadoindex.component.css']
})
export class EgresadoindexComponent implements OnInit {
  user;
  constructor(private egresadosService:EgresadosService, 
    private token:TokenService, private Jarwis:JarwisService
    , public router: Router,private formBuilder: FormBuilder) { }
  egresados;
  buscador: FormGroup;
  ngOnInit() {
    this.buscador = this.formBuilder.group({
      codigo: null,
      estado: null,
    });
    this.egresadosList();
    this.persona();
  }

  egresadosList(){
    this.egresadosService.getlist().subscribe(response=>{
      this.egresados= response;
    })
  }
  persona(){
    this.Jarwis.me(this.token.get()).subscribe(response=>{
       this.user= response;
      if(this.user.rol == 0){
        this.router.navigate(['']);
      }
    })
  }
 buscar(){
   this.egresadosService.buscar(this.buscador.value).subscribe(response=>{
    this.egresados= response;
   })
 }
 borrar(){
  this.buscador.reset()
  }
}
