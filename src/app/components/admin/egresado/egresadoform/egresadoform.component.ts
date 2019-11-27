import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { EgresadosService } from 'src/app/services/egresados.service';
import { DatePipe } from '@angular/common';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-egresadoform',
  templateUrl: './egresadoform.component.html',
  styleUrls: ['./egresadoform.component.css'],
  providers: [DatePipe]
})
export class EgresadoformComponent implements OnInit {
  @Input() ID:string;
  @Input() EGRE:string;
  
  constructor( private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private paisesService:PaisesService,
    private departamentosService:DepartamentosService,
    private provinciasService:ProvinciasService,
    private personaServices: PersonaService,
    private egresadosService:EgresadosService) { }
    egresadoform: FormGroup;
    personaForm: FormGroup;
    paises;
    departamentos;
    usuarios;
    provincias;
  ngOnInit() {
    this.pais();
    this.depar();
    this.provin();
    this.egresadoform = this.formBuilder.group({
      id:  [''],
      codigo: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      celular: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      persona_id: [''],
      pais: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
    });
    this.personaForm = this.formBuilder.group({});
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

  myDate;
  save(){
    if(this.EGRE == null){
      this.myDate = new Date();
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.egresadoform.value.fec_actualizacion=this.myDate;
    this.egresadoform.value.estado_actualizaciones='0';
    this.egresadoform.value.persona_id=this.ID;
    this.personaForm.value.activo=true
    this.egresadosService.add(this.egresadoform.value).subscribe();
    this.personaServices.update(this.ID, this.personaForm.value).subscribe();
    }else{
      this.egresadosService.update(this.EGRE,this.egresadoform.value).subscribe();
    }
    
  }
  borrar(){
    this.egresadoform.reset();
  }
}
