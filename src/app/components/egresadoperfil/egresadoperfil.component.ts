import { Component, OnInit } from '@angular/core';
import { EgresadosService } from 'src/app/services/egresados.service';
import { TokenService } from 'src/app/services/token.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresadoescuelasService } from 'src/app/services/egresadoescuelas.service';
import { EmpresasService } from 'src/app/services/empresas.service';
@Component({
  selector: 'app-egresadoperfil',
  templateUrl: './egresadoperfil.component.html',
  styleUrls: ['./egresadoperfil.component.css']
})
export class EgresadoperfilComponent implements OnInit {
  escuelaForm: FormGroup;
  constructor(private egresadosService:EgresadosService, private token:TokenService,private formBuilder: FormBuilder
    ,private egresadoescuelasService:EgresadoescuelasService,private empresasService:EmpresasService) { }
  egresado;
  IDEGRESADO;
  empresas;
  ngOnInit() {
    this.egresadoPerfil();
    this.empresasList();
    this.escuelaForm = this.formBuilder.group({
      id:  [''],
      fecha_ingreso: ['', [Validators.required]],
      fecha_egreso: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      escuela_profesiona_id: [''],
      egresado_id: [''],
    });
  }
  egresadoPerfil(){
    this.egresadosService.egresados(this.token.get()).subscribe(response=>{
      this.egresado=response
      console.log(response)
    })
  }
  save(){
    this.escuelaForm.value.egresado_id=this.IDEGRESADO
    this.empresasService.add(this.escuelaForm.value).subscribe(response=>{
      this.empresasList();
    });

  }
  EGRESADOID(id){
    this.IDEGRESADO=id
  }
  empresasList(){
    this.empresasService.getlist().subscribe(response=>{
      this.empresas= response;
    })
  }
  
}
