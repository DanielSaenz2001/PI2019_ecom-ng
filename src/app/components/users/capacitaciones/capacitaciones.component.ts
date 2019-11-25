import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { EgresadosService } from 'src/app/services/egresados.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private capacitacionesService:CapacitacionesService,
    private empresasService:EmpresasService,private egresadosService: EgresadosService, private token:TokenService) { }
  capacitacionesForm: FormGroup;
  empresas;
  egresado;
  capacitaciones;
  ngOnInit() {
    this.PersonaList();
    /*this.capacitacionesList();
    this.empresasList();*/
    this.capacitacionesForm = this.formBuilder.group({
      id:  [''],
      nombre: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      precio: [''],
      rutas: ['', [Validators.required]],
      egresado_id: [''],
      empresa_id: ['',[Validators.required]],
    });
    this.borrar();
  }
  save(){
    if(this.capacitacionesForm.value.id == null){
      this.capacitacionesForm.value.egresado_id=this.egresado.id;
      console.log(this.capacitacionesForm.value)
      this.capacitacionesService.add(this.capacitacionesForm.value).subscribe(response=>{
        this.capacitacionesList()
      });
    }else{
      this.capacitacionesService.update( this.capacitacionesForm.value.id,this.capacitacionesForm.value).subscribe(response=>{
        this.capacitacionesList();
    });
  }
    this.borrar();
  }
  empresasList(){
    this.empresasService.getlist(this.token.get()).subscribe(response=>{
      this.empresas= response;
    })
  }
  PersonaList(){
    this.egresadosService.egresados(this.token.get()).subscribe(response=>{
      this.egresado=response
    })
  }
  capacitacionesList(){
    this.capacitacionesService.getlist(this.token.get()).subscribe(response=>{
      this.capacitaciones= response;
    })
  }
  borrar(){
    this.capacitacionesForm.reset();
  }
  delete(id) {
    this.capacitacionesService.delete(id).subscribe(response=>{
      this.capacitacionesList();
    });
  }
  actualizar(id){
    this.capacitacionesService.getById(id).subscribe(response =>{
      this.capacitacionesForm.setValue(response);
    })
  }
}
