import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresadoescuelasService } from 'src/app/services/egresadoescuelas.service';
import { FacultadesService } from 'src/app/services/facultades.service';
import { EscuelasService } from 'src/app/services/escuelas.service';
import { AdminService } from 'src/app/services/admin.service';
import { EgresadosService } from 'src/app/services/egresados.service';
import { TokenService } from 'src/app/services/token.service';
import { PaisesService } from 'src/app/services/paises.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-egreegresados',
  templateUrl: './egreegresados.component.html',
  styleUrls: ['./egreegresados.component.css'],
  providers: [DatePipe]
})
export class EgreegresadosComponent implements OnInit {
  @Input() ID;
  escuelaForm: FormGroup;
  egresa: FormGroup;
  egresadoform: FormGroup;
  constructor(private formBuilder: FormBuilder
    ,private egresadoescuelasService:EgresadoescuelasService,private facultadesService:FacultadesService, private escuelasService:EscuelasService
    ,private datePipe: DatePipe,private adminService:AdminService,private egresadosService: EgresadosService,
    private tokenService:TokenService,private paisesService:PaisesService,
    private departamentosService:DepartamentosService,
    private provinciasService:ProvinciasService) { }
  egresado;
  IDEGRESADO;
  facultades;
  escuelas;
  myDate;
  egresadosescuelas;
  paises;
  departamentos;
  provincias;
  
  ngOnInit() {
    this.egresadoPerfil();
   this.EgresadoEscuelaList();
    this.facultadesList();
    this.EscuelasList();
    this.pais();
    this.depar();
    this.provin();
    this.escuelaForm = this.formBuilder.group({
      id:  [''],
      fecha_ingreso: ['', [Validators.required]],
      fecha_egreso: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      facultad: [''],
      escuela_profesiona_id: ['', [Validators.required]],
      egresado_id: [''],
    });
    this.egresa = this.formBuilder.group({});
    this.egresadoform = this.formBuilder.group({
      id:  [''],
      codigo: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      celular: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      persona_id: [''],
      pais: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      domicilio_actual: ['', [Validators.required]],
      fec_actualizacion: [''],
      estado_actualizaciones: [''],

    });
  }
  egresadoPerfil(){
    this.adminService.egresado(this.ID,this.tokenService.get()).subscribe(response=>{
      this.egresado=response
    })
  }
  save(){
    this.escuelaForm.value.egresado_id=this.IDEGRESADO

    this.myDate = new Date();
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.egresa.value.fec_actualizacion=this.myDate;
    this.egresa.value.estado_actualizaciones='1';

     this.escuelaForm.value.egresado_id=this.IDEGRESADO

    this.egresadoescuelasService.add(this.escuelaForm.value).subscribe(response=>{
      this.EgresadoEscuelaList();
    });
    this.egresadosService.updateestado(this.IDEGRESADO,this.egresa.value).subscribe();
  }
  EGRESADOID(id){
    this.IDEGRESADO=id
  }
  datos(id){
    this.egresadosService.getById(id).subscribe(response=>{
      this.egresadoform.setValue(response)
    })
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
    this.adminService.egresadoescuela(this.ID,this.tokenService.get()).subscribe(response=>{
      this.egresadosescuelas = response;
    })
  }
  delete(id){
    this.egresadoescuelasService.delete(id).subscribe(response=>{
      this.EgresadoEscuelaList();
    });
  }
  save3(){
    this.egresadosService.update(this.egresadoform.value.id,this.egresadoform.value).subscribe(response=>{
      this.egresadoPerfil();
    });
    this.borrar()
  }
  pais(){
    this.paisesService.getlist().subscribe(response => {
      this.paises= response;
    });
  }
  depar(){
    this.departamentosService.getlist().subscribe(response => {
      this.departamentos= response;
    });
  }
  provin(){
    this.provinciasService.getlist().subscribe(response => {
      this.provincias= response;
    });
  }
  borrar(){
    this.egresadoform.reset()
  }
}
