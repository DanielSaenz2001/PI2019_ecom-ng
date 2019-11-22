import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { SugerenciasService } from 'src/app/services/sugerencias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sugerenciasindex',
  templateUrl: './sugerenciasindex.component.html',
  styleUrls: ['./sugerenciasindex.component.css'],
  providers: [DatePipe]
})
export class SugerenciasindexComponent implements OnInit {
  

  constructor(private Jarwis: JarwisService, private token:TokenService, private sugerenciasService:SugerenciasService
    ,private formBuilder: FormBuilder,private datePipe: DatePipe) { }
  list;
  ID;
  myDate;
  sugerenciaForm: FormGroup;
  sugerencias;
  ngOnInit() {
    this.listar();
    this.sugerenciasList();
    this.sugerenciaForm = this.formBuilder.group({
      id:  [''],
      comentario_egresado: ['', [Validators.required]],
      tipo_comentario: ['', [Validators.required]],
      fecha_creacion:  [''],
      user_creador:  [''],
      comentario_respuesta: [''],
      fecha_atencion: [''],
      user_administrador: [''],
    });
  }
  listar(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= response;
    });
  }
  generar(ids){
    this.ID=ids
  }
  detalles(ids){
    this.sugerenciasService.getById(ids).subscribe(response =>{
      this.sugerenciaForm.setValue(response);
    })
  }
  sugerenciasList(){
    this.sugerenciasService.getlist().subscribe(response=>{
      this.sugerencias= response;
    })
  }
  delete(id) {
    this.sugerenciasService.delete(id).subscribe(response=>{
      this.sugerenciasList();
    });
  }
  save(){
    if(this.sugerenciaForm.value.id == null){
      this.myDate = new Date();
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.sugerenciaForm.value.fecha_creacion=this.myDate;
      this.sugerenciaForm.value.user_creador=this.ID;
      this.sugerenciasService.add(this.sugerenciaForm.value).subscribe(response=>{
        this.sugerenciasList();
      });
      
    }else{
      this.sugerenciasService.update(this.sugerenciaForm.value.id ,this.sugerenciaForm.value).subscribe(response=>{
        this.sugerenciasList();
      });
    }
    this.borrar()
  }
  borrar(){
    this.sugerenciaForm.reset();
  }
}
