import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresadoescuelasService } from 'src/app/services/egresadoescuelas.service';
import { FacultadesService } from 'src/app/services/facultades.service';
import { EscuelasService } from 'src/app/services/escuelas.service';
import { AdminService } from 'src/app/services/admin.service';
import { EgresadosService } from 'src/app/services/egresados.service';

@Component({
  selector: 'app-egreegresados',
  templateUrl: './egreegresados.component.html',
  styleUrls: ['./egreegresados.component.css'],
  providers: [DatePipe]
})
export class EgreegresadosComponent implements OnInit {
  @Input() ID;
  escuelaForm: FormGroup;
  egresadoform: FormGroup;
  constructor(private formBuilder: FormBuilder
    ,private egresadoescuelasService:EgresadoescuelasService,private facultadesService:FacultadesService, private escuelasService:EscuelasService
    ,private datePipe: DatePipe,private adminService:AdminService,private egresadosService: EgresadosService) { }
  egresado;
  IDEGRESADO;
  facultades;
  escuelas;
  myDate;
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
    this.adminService.egresado(this.ID).subscribe(response=>{
      this.egresado=response
    })
  }
  save(){
    const myDate = new Date(this.escuelaForm.value.fecha_ingreso);
    this.escuelaForm.value.fecha_ingreso = this.datePipe.transform(myDate, 'yyyy');
    const myDate2 = new Date(this.escuelaForm.value.fecha_egreso);
    this.escuelaForm.value.fecha_egreso = this.datePipe.transform(myDate2, 'yyyy');
    this.escuelaForm.value.egresado_id=this.IDEGRESADO
    this.egresadoescuelasService.add(this.escuelaForm.value).subscribe(response=>{
      this.EgresadoEscuelaList();
    });
    this.myDate = new Date();
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.egresadoform.value.fec_actualizacion=this.myDate;
    this.egresadoform.value.estado_actualizaciones='1';
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
    this.escuelasService.getlist().subscribe(response=>{
      this.escuelas= response;
    })
  }

  EgresadoEscuelaList(){
    this.adminService.egresadoescuela(this.ID).subscribe(response=>{
      this.egresadosescuelas = response;
    })
  }

}
