import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { EgresadosService } from 'src/app/services/egresados.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  EX: any;

  constructor(private empresasService:EmpresasService,private formBuilder: FormBuilder, private token:TokenService
    , private experienciasService:ExperienciasService,private egresadosService: EgresadosService) { }
  empresas;
  egresado;
  expe;
  expForm: FormGroup;
  historyForm: FormGroup;
  ngOnInit() {
    /*this.ExpList();
    this.empresasList();*/
    this. PersonaList();
    this.expForm = this.formBuilder.group({
      id:  [''],
      validacion_fecha: [''],
      is_validando: [''],
      descripcion_val: [''],
      egresado_id: [''],
      empresa_id: ['', [Validators.required]],
    });
    this.historyForm = this.formBuilder.group({
      id:  [''],
      descripccion: [''],
      estado: ['',[Validators.required]],
      cargo: ['',[Validators.required]],
      fech_inicio: ['',[Validators.required]],
      fech_fin: ['',[Validators.required]],
      experiencia_laboral_id: [''],
    });
  }
  empresasList(){
    this.empresasService.getlist(this.token.get()).subscribe(response=>{
      this.empresas= response;
    })
  }
  save(){
    if(this.expForm.value.id == null){
      this.expForm.value.egresado_id=this.egresado.id;
      this.experienciasService.add(this.expForm.value).subscribe(response=>{
        this.ExpList();
      });
    }else{
      this.experienciasService.update(this.expForm.value.id ,this.expForm.value).subscribe(response=>{
        this.ExpList();
      });
    }
   this.borrar();
  }
  borrar(){
    this.expForm.reset();
  }
  borrar2(){
    this.historyForm.reset();
  }
  PersonaList(){
    this.egresadosService.egresados(this.token.get()).subscribe(response=>{
      this.egresado=response
    })
  }
  ExpList(){
    this.experienciasService.getlist(this.token.get()).subscribe(response=>{
      this.expe= response;
      console.log(this.expe)
    })
  }
  detalles(id){
    this.experienciasService.getById(id).subscribe(response =>{
      this.expForm.setValue(response);
    });
  }
  histo(id){
    this.EX = id;
  }
  save2(){
    this.historyForm.value.experiencia_laboral_id=this.EX;
    console.log(this.historyForm.value)
    /*console.log("ID: ",this.expForm.value.id)
    if(this.expForm.value.id == null){
      console.log("add")
      this.expForm.value.egresado_id=this.egresado.id;
      this.experienciasService.add(this.expForm.value).subscribe(response=>{
        this.ExpList();
      });
    }else{
      console.log("update")
      this.experienciasService.update(this.expForm.value.id ,this.expForm.value).subscribe(response=>{
        this.ExpList();
      });
    }
   this.borrar();*/
  }
}
