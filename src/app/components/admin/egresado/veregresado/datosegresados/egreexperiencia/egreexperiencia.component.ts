import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { HistoryService } from 'src/app/services/history.service';
import { AdminService } from 'src/app/services/admin.service';
import { DatePipe } from '@angular/common';
import { EgresadosService } from 'src/app/services/egresados.service';


@Component({
  selector: 'app-egreexperiencia',
  templateUrl: './egreexperiencia.component.html',
  styleUrls: ['./egreexperiencia.component.css'],
  providers: [DatePipe]
})
export class EgreexperienciaComponent implements OnInit {
  @Input() ID;
  EX: any;
  DA: any;

  constructor(private formBuilder: FormBuilder,private experienciasService:ExperienciasService,private historyService:HistoryService,
    private adminService:AdminService,private datePipe: DatePipe,private egresadosService: EgresadosService) { }
  empresas;
  egresado;
  expe;
  datos;
  myDate;
  expForm: FormGroup;
  historyForm: FormGroup;
   egresadoform: FormGroup;
  ngOnInit() {
    this.ExpList();
    this.empresasList();
    this.PersonaList();
    this.expForm = this.formBuilder.group({
      id:  [''],
      validacion_fecha: [''],
      is_validando: [''],
      descripcion_val: [''],
      egresado_id: [''],
      empresa_id: ['', [Validators.required]],
    });
    this.historyForm = this.formBuilder.group({
      id:  [''],
      descripccion: [''],
      estado: ['',[Validators.required]],
      cargo: ['',[Validators.required]],
      fech_creacion:[''],
      fech_inicio: ['',[Validators.required]],
      fech_fin: ['',[Validators.required]],
      experiencia_laboral_id: [''],
    });
    this.egresadoform = this.formBuilder.group({
      fec_actualizacion: ['',[Validators.required]],
      estado_actualizaciones: ['',[Validators.required]],
    });
  }
  empresasList(){
    this.adminService.empresas(this.ID).subscribe(response=>{
      this.empresas= response;
    })
  }
  save(){
    if(this.expForm.value.id == null){
      this.expForm.value.egresado_id=this.egresado.id;
      this.experienciasService.add(this.expForm.value).subscribe(response=>{
        this.ExpList();
      });
      this.myDate = new Date();
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.egresadoform.value.fec_actualizacion=this.myDate;
      this.egresadoform.value.estado_actualizaciones='1';
      this.egresadosService.updateestado(this.egresado.id,this.egresadoform.value).subscribe();
    }
   this.borrar();
  }
  borrar(){
    this.expForm.reset();
  }
  borrar2(){
    this.historyForm.reset();
  }
  PersonaList(){
    this.adminService.egresado(this.ID).subscribe(response=>{
      this.egresado=response
    })
  }
  ExpList(){
    this.adminService.experiencia(this.ID).subscribe(response=>{
      this.expe= response;
    })
  }
  detalles(id){
    this.experienciasService.getById(id).subscribe(response =>{
      this.expForm.setValue(response);
    });
  }
  histo(id){
    this.EX = id;
  }
  save2(){
    this.myDate = new Date();
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.historyForm.value.fech_creacion=this.myDate
    this.historyForm.value.experiencia_laboral_id=this.EX;
      this.historyService.add(this.historyForm.value).subscribe(response=>{
        this.ExpList();
      });
      this.egresadoform.value.fec_actualizacion=this.myDate;
      this.egresadoform.value.estado_actualizaciones='2';
      this.egresadosService.updateestado(this.egresado.id,this.egresadoform.value).subscribe();  
   this.borrar2();
  }
  detalles2(id){
    this.historyService.getById(id).subscribe(response =>{
      this.historyForm.setValue(response);
    });
  }
  verdatos(id){
    this.historyService.getById(id).subscribe(response=>{
      this.datos= response;
    })
  }

}
