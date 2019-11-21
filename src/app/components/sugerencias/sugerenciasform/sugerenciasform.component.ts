import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SugerenciasService } from 'src/app/services/sugerencias.service';
@Component({
  selector: 'app-sugerenciasform',
  templateUrl: './sugerenciasform.component.html',
  styleUrls: ['./sugerenciasform.component.css'],
  providers: [DatePipe]
})
export class SugerenciasformComponent implements OnInit {
  @Input() ID:string;
  @Input() FK:string;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,
    private datePipe: DatePipe, private sugerenciasService:SugerenciasService) { }
  sugerenciaForm: FormGroup;
  ngOnInit() {

    this.sugerenciaForm = this.formBuilder.group({
      id:  [''],
      comentario_egresado: ['', [Validators.required]],
      tipo_comentario: ['', [Validators.required]],
    });
  }
  myDate;
  save(){
    if(this.sugerenciaForm.value.id == null){
      this.myDate = new Date();
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.sugerenciaForm.value.fecha_creacion=this.myDate;
      this.sugerenciaForm.value.user_creador=this.ID;
      this.sugerenciasService.add(this.sugerenciaForm.value).subscribe();
    }else{
      this.sugerenciasService.update(this.FK,this.sugerenciaForm.value).subscribe();
    }
    this.borrar()
  
  }
  borrar(){
    this.sugerenciaForm.reset();
  }
}

