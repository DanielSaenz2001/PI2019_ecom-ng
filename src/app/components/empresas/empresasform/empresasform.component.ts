import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresasService } from 'src/app/services/empresas.service';
@Component({
  selector: 'app-empresasform',
  templateUrl: './empresasform.component.html',
  styleUrls: ['./empresasform.component.css']
})
export class EmpresasformComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private empresasService:EmpresasService) { }
  empresaFrom: FormGroup;
  ngOnInit() {
    this.empresaFrom = this.formBuilder.group({
      id:  [''],
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      tipo: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });
  }
  save(){
    this.empresaFrom.value.egresado=1;
    console.log(this.empresaFrom.value)
    this.empresasService.add(this.empresaFrom.value).subscribe();
  }
}
