import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PersonaService } from '../../../services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { PaisesService } from 'src/app/services/paises.service';
@Component({
  selector: 'app-persona-dependiente',
  templateUrl: './persona-dependiente.component.html',
  styleUrls: ['./persona-dependiente.component.css']
})
export class PersonaDependienteComponent implements OnInit {
  paises;
  departamentos;
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

    id = this.route.snapshot.paramMap.get('id')
  ngOnInit() {
    this.pais();
    this.depar();
    this.personaForm = this.formBuilder.group({
      
      id: [''],
      nombre: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      dni: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]],
      pais: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      fec_nacimiento: ['', [Validators.required]],
      est_civil: ['', [Validators.required]],
      domicilio_actual: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      dependiente:[this.id],
    });

  }
  save(){
    let id = this.route.snapshot.paramMap.get('id')
    if(id != null){
      this.personaServices.add(this.personaForm.value).subscribe();
    }
    
    this.router.navigate(['/persona']);
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
}
