import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';

import { DatePipe } from '@angular/common';
import { SugerenciasService } from 'src/app/services/sugerencias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-responder-sugerencias',
  templateUrl: './responder-sugerencias.component.html',
  styleUrls: ['./responder-sugerencias.component.css'],
  providers: [DatePipe]
})
export class ResponderSugerenciasComponent implements OnInit {
  list;
  myDate;
  ID;
  sugerenciaForm: FormGroup;
  sugerencias;
  constructor(private Jarwis: JarwisService, private token:TokenService, private sugerenciasService:SugerenciasService
    ,private formBuilder: FormBuilder,private datePipe: DatePipe) { }
  listar(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= response;
      console.log(response)
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
  ngOnInit() {
    this.listar();
    this.sugerenciasList();
    this.sugerenciaForm = this.formBuilder.group({
      id:  [''],
      comentario_egresado: [''],
      tipo_comentario: [''],
      fecha_creacion:  [''],
      user_creador:  [''],
      comentario_respuesta: ['',[Validators.required]],
      fecha_atencion: [''],
      user_administrador: [''],
    });
  }
  sugerenciasList(){
    this.sugerenciasService.getlist2().subscribe(response=>{
      this.sugerencias= response;
      console.log("asdas :", response)
    })
  }
  delete(id) {
    this.sugerenciasService.delete(id).subscribe(response=>{
      this.sugerenciasList();
    });
  }
  save(){
      this.myDate = new Date();
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.sugerenciaForm.value.fecha_atencion=this.myDate;
      this.sugerenciaForm.value.user_administrador=this.list.user_ID;
      console.log(this.sugerenciaForm.value)
     this.sugerenciasService.update2(this.sugerenciaForm.value.id ,this.sugerenciaForm.value).subscribe(response=>{
        this.sugerenciasList();
      });
    this.borrar()
  }
  borrar(){
    this.sugerenciaForm.reset();
  }
}
