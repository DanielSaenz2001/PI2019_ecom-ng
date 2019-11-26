import { Component, OnInit } from '@angular/core';
import { EgresadosService } from 'src/app/services/egresados.service';
import { TokenService } from 'src/app/services/token.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresadoescuelasService } from 'src/app/services/egresadoescuelas.service';
import { FacultadesService } from 'src/app/services/facultades.service';
import { EscuelasService } from 'src/app/services/escuelas.service';

@Component({
  selector: 'app-egresado',
  templateUrl: './egresado.component.html',
  styleUrls: ['./egresado.component.css'],
  providers: [DatePipe]
})
export class EgresadoComponent implements OnInit {

  escuelaForm: FormGroup;
  egresadoform: FormGroup;
  constructor(private egresadosService:EgresadosService, private token:TokenService,private formBuilder: FormBuilder
    ,private egresadoescuelasService:EgresadoescuelasService,private facultadesService:FacultadesService, private escuelasService:EscuelasService
    ,private datePipe: DatePipe) { }
  egresado;
  IDEGRESADO;
  facultades;
  myDate;
  escuelas;
  egresadosescuelas;
  ngOnInit() {
    this.egresadoPerfil();
   this.EgresadoEscuelaList();
    this.facultadesList();
    this.EscuelasList();
    this.escuelaForm = this.formBuilder.group({
      id:  [''],
      fecha_ingreso: ['', [Validators.required]],
      fecha_egreso: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      facultad: [''],
      escuela_profesiona_id: ['', [Validators.required]],
      egresado_id: [''],
    });
    this.egresadoform = this.formBuilder.group({
      fec_actualizacion: ['',[Validators.required]],
      estado_actualizaciones: ['',[Validators.required]],
    });
  }
  egresadoPerfil(){
    this.egresadosService.egresados(this.token.get()).subscribe(response=>{
      this.egresado=response
    })
  }
  save(){
    const myDate = new Date(this.escuelaForm.value.fecha_ingreso);
    this.escuelaForm.value.fecha_ingreso = this.datePipe.transform(myDate, 'yyyy');
    const myDate2 = new Date(this.escuelaForm.value.fecha_egreso);
    this.escuelaForm.value.fecha_egreso = this.datePipe.transform(myDate2, 'yyyy');

    this.myDate = new Date();
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.egresadoform.value.fec_actualizacion=this.myDate;
    this.egresadoform.value.estado_actualizaciones='1';

    this.escuelaForm.value.egresado_id=this.IDEGRESADO

    this.egresadoescuelasService.add(this.escuelaForm.value).subscribe(response=>{
      this.EgresadoEscuelaList();
    });
    this.egresadosService.updateestado(this.IDEGRESADO,this.egresadoform.value).subscribe();
  }
  EGRESADOID(id){
    this.IDEGRESADO=id
  }

  facultadesList(){
    this.facultadesService.getlist().subscribe(response=>{
      this.facultades= response;
    })
  }
  EscuelasList(){
    this.escuelasService.getlist2().subscribe(response=>{
      this.escuelas= response;
    })
  }

  EgresadoEscuelaList(){
    this.egresadoescuelasService.getlist2(this.token.get()).subscribe(response=>{
      this.egresadosescuelas = response;
    })
  }
  
}
