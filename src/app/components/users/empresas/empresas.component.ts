import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { EgresadosService } from 'src/app/services/egresados.service';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(private empresasService:EmpresasService,private formBuilder: FormBuilder, private token:TokenService
    ,private egresadosService: EgresadosService) { }
  empresas;
  egresado;
  empresaForm: FormGroup;
  ngOnInit() { 
    this.PersonaList()
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
    this.borrar();
  }
  empresasList(){
    this.empresasService.getlist(this.token.get()).subscribe(response=>{
      this.empresas= response;
    })
  }
  save(){
    if(this.empresaForm.value.id == null){
      this.empresaForm.value.egresado=this.egresado.id;
      this.empresasService.add(this.empresaForm.value).subscribe(response=>{
        this.empresasList();
      });
    }else{
      this.empresasService.update(this.empresaForm.value.id ,this.empresaForm.value).subscribe(response=>{
        this.empresasList();
      });
    }
   this.borrar();
  }
  borrar(){
    this.empresaForm.reset();
  }
  actualizar(id){
    this.empresasService.getById(id).subscribe(response =>{
      this.empresaForm.setValue(response);
    })
  }
  PersonaList(){
    this.egresadosService.egresados(this.token.get()).subscribe(response=>{
      this.egresado=response
    })
  }
}
