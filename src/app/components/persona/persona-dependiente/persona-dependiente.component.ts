import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PersonaService } from '../../../services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { PaisesService } from 'src/app/services/paises.service';
import { TokenService } from 'src/app/services/token.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-persona-dependiente',
  templateUrl: './persona-dependiente.component.html',
  styleUrls: ['./persona-dependiente.component.css']
})
export class PersonaDependienteComponent implements OnInit {
  paises;
  departamentos;
  provincias;
  personaForm: FormGroup;
  usuarios;
  constructor( private route: ActivatedRoute,
    private personaServices: PersonaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private paisesService:PaisesService,
    private departamentosService:DepartamentosService,
    private provinciasService:ProvinciasService,
    private Jarwis: JarwisService, private token:TokenService) { 
      let id =this.route.snapshot.paramMap.get('id')
      this.personaServices.getById(id).subscribe();
      
    }
    
    id = this.route.snapshot.paramMap.get('id')
  ngOnInit() {
    this.pais();
    this.usuario();
    this.depar();
    this.provin();
    this.personaForm = this.formBuilder.group({
      
      id:  ['', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]],
      nombre: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]],
      //celular: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
       pais: ['', [Validators.required]],
        departamento: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      fec_nacimiento: ['', [Validators.required]],
      est_civil: ['', [Validators.required]],
      //domicilio_actual: ['', [Validators.required]],
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
  provin(){
    this.provinciasService.getlist().subscribe(response => {
      this.provincias= response;
    });
  }
  usuario(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.usuarios= response[0].persona_ID;
       // this.list= JSON.stringify(response );
    });
  }
}
