import { Component, OnInit, Input } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { EgresadosService } from 'src/app/services/egresados.service';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-egreempresas',
  templateUrl: './egreempresas.component.html',
  styleUrls: ['./egreempresas.component.css']
})
export class EgreempresasComponent implements OnInit {
  @Input() ID;
  constructor(private empresasService:EmpresasService,private formBuilder: FormBuilder,private adminService:AdminService,
    private tokenService:TokenService) { }
  empresas;
  egresado;
  empresaForm: FormGroup;
  ngOnInit() { 
    this.PersonaList();
    this.empresasList();
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
    this.adminService.empresas(this.ID,this.tokenService.get()).subscribe(response=>{
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
    this.adminService.egresado(this.ID,this.tokenService.get()).subscribe(response=>{
      this.egresado=response
    })
  }

}
