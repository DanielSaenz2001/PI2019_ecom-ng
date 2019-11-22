import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SugerenciasService } from 'src/app/services/sugerencias.service';
@Component({
  selector: 'app-sugerenciasform',
  templateUrl: './sugerenciasform.component.html',
  styleUrls: ['./sugerenciasform.component.css'],
  
})
export class SugerenciasformComponent implements OnInit {
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
  
  
}

