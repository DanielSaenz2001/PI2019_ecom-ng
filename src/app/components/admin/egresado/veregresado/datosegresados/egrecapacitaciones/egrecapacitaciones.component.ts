import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { AdminService } from 'src/app/services/admin.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-egrecapacitaciones',
  templateUrl: './egrecapacitaciones.component.html',
  styleUrls: ['./egrecapacitaciones.component.css']
})
export class EgrecapacitacionesComponent implements OnInit {
  @Input() ID;
  constructor(private formBuilder: FormBuilder, private capacitacionesService:CapacitacionesService,
    private adminService:AdminService, private tokenService:TokenService) { }
  capacitacionesForm: FormGroup;
  empresas;
  egresado;
  capacitaciones;
  ngOnInit() {
    this.PersonaList();
    this.capacitacionesList();
    this.empresasList();
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
    this.adminService.empresas(this.ID,this.tokenService.get()).subscribe(response=>{
      this.empresas= response;
    })
  }
  PersonaList(){
    this.adminService.egresado(this.ID,this.tokenService.get()).subscribe(response=>{
      this.egresado=response
    })
  }
  capacitacionesList(){
    this.adminService.capacitaciones(this.ID,this.tokenService.get()).subscribe(response=>{
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
