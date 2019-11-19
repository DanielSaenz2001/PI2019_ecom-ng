import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-egresadoform',
  templateUrl: './egresadoform.component.html',
  styleUrls: ['./egresadoform.component.css']
})
export class EgresadoformComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  egresadoform: FormGroup;
  ngOnInit() {
    this.egresadoform = this.formBuilder.group({
      id:  [''],
      codigo: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]],
      celular: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]],
      estado_actualizaciones: ['0'],
      fec_actualizacion: [''],
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      persona_id: [''],
      domicilio_actual: [''],
    });
  }

}
