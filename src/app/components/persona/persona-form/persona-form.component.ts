import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../../../services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { PaisesService } from 'src/app/services/paises.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  personaForm: FormGroup;
  constructor( private route: ActivatedRoute,
    private personaServices: PersonaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private paisesService:PaisesService,
    private departamentosService:DepartamentosService) { 
      let id =this.route.snapshot.paramMap.get('id')
      this.personaServices.getById(id).subscribe();
      
    }
    paises;
    departamentos;
  ngOnInit() {
    this.pais();
    this.depar();
    this.personaForm = this.formBuilder.group({
      id:  ['', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]],
      nombre: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      pais: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      fec_nacimiento: ['', [Validators.required]],
      est_civil: ['', [Validators.required]],
      domicilio_actual: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      dependiente:null
    });
    let id = this.route.snapshot.paramMap.get('id')
    if(id != null){
      this.personaServices.getById(id).subscribe(response =>{
        this.personaForm.setValue(response);
      })
    }
  }

  pais(){
    this.paisesService.getlist().subscribe(response => {
      this.paises= response;
    });
  }
  depar(){
    this.departamentosService.getlist().subscribe(response => {
      this.departamentos= response;
    });
  }

  save(){
    let id = this.route.snapshot.paramMap.get('id')
    if(id != null){
      this.personaServices.update(id, this.personaForm.value)
      .subscribe();
    }else{
      this.personaServices.add(this.personaForm.value).subscribe(response =>{
        console.log(response);
        
      });
    }
  }
}
