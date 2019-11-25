import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-empresasindex',
  templateUrl: './empresasindex.component.html',
  styleUrls: ['./empresasindex.component.css']
})
export class EmpresasindexComponent implements OnInit {

  constructor(private empresasService:EmpresasService,private formBuilder: FormBuilder) { }
  empresas;
  ID;
  empresaForm: FormGroup;
  ngOnInit() { 
    this.empresasList()
    this.empresaForm = this.formBuilder.group({
      id:  [''],
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      tipo: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      egresado: [''],
    });
  }
  empresasList(){
  /*  this.empresasService.getlist().subscribe(response=>{
      this.empresas= response;
    })*/
  }
  detalles(ids){
    this.empresasService.getById(ids).subscribe(response =>{
      this.empresaForm.setValue(response);
    })
  }
  save(){
    if(this.empresaForm.value.id == null){
      this.empresaForm.value.egresado=this.ID;
      this.empresasService.add(this.empresaForm.value).subscribe(response=>{
        this.empresasList();
      });
    }else{
      this.empresasService.update(this.empresaForm.value.id ,this.empresaForm.value).subscribe(response=>{
        this.empresasList();
      });
    }
   
  }
  generar(ids){
    this.ID=ids
  }
  borrar(){
    this.empresaForm.reset();
  }
  delete(id) {
    this.empresasService.delete(id).subscribe(response=>{
      this.empresasList();
    });
  }
}
