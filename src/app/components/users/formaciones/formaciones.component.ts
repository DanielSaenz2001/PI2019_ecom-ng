import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { FormacionesService } from 'src/app/services/formaciones.service';
import { EgresadosService } from 'src/app/services/egresados.service';
@Component({
  selector: 'app-formaciones',
  templateUrl: './formaciones.component.html',
  styleUrls: ['./formaciones.component.css'],
  providers: [DatePipe]
})
export class FormacionesComponent implements OnInit {

  constructor(private egresadosService: EgresadosService, private token:TokenService,private formBuilder: FormBuilder
    ,private formacionesService:FormacionesService) { }
  formacionForm: FormGroup;
  formaciones;
  egresado;
  ngOnInit() {
    
    this.PersonaList()
   /* this.formacionesList()*/
    this.formacionForm = this.formBuilder.group({
      id:  [''],
      fech_inicio: ['', [Validators.required]],
      fech_fin: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      rutas: ['', [Validators.required]],
      egresado_id: [''],
    });
    this.borrar();
  }
  save(){
    if(this.formacionForm.value.id == null){
      this.formacionForm.value.egresado_id=this.egresado.id
      this.formacionesService.add(this.formacionForm.value).subscribe(response=>{
        this.formacionesList();
      });
    }else{
      this.formacionesService.update( this.formacionForm.value.id,this.formacionForm.value).subscribe(response=>{
        this.formacionesList();
      });
    }
    this.borrar();
  }
  
  actualizar(id){
    this.formacionesService.getById(id).subscribe(response =>{
      this.formacionForm.setValue(response);
    })
  }
  formacionesList(){
    this.formacionesService.getlist(this.token.get()).subscribe(response=>{
      this.formaciones = response;
    })
  }
  borrar(){
    this.formacionForm.reset();
  }
  PersonaList(){
    this.egresadosService.egresados(this.token.get()).subscribe(response=>{
      this.egresado=response
    })
  }
  delete(id) {
    this.formacionesService.delete(id).subscribe(response=>{
      this.formacionesList();
    });
  }
}
