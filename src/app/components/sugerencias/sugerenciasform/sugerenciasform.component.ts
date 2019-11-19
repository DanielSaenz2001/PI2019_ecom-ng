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
    this.myDate = new Date();
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.sugerenciaForm.value.fecha_creacion=this.myDate;
    this.sugerenciaForm.value.user_creador=this.ID;
    this.sugerenciasService.add(this.sugerenciaForm.value).subscribe();
   /* let id = this.route.snapshot.paramMap.get('id')
   if(id != null){
      this.personaServices.update(id, this.personaForm.value);
      this.router.navigateByUrl('/profile');
    }else{
      this.personaServices.add(this.personaForm.value).subscribe();
    }*/
    
  }
  borrar(){
    this.sugerenciaForm.reset();
  }
}

