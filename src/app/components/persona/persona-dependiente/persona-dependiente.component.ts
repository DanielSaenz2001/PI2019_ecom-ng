import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PersonaService } from '../../../services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-persona-dependiente',
  templateUrl: './persona-dependiente.component.html',
  styleUrls: ['./persona-dependiente.component.css']
})
export class PersonaDependienteComponent implements OnInit {

  personaForm: FormGroup;
  constructor( private route: ActivatedRoute,
    private personaServices: PersonaService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      let id =this.route.snapshot.paramMap.get('id')
      this.personaServices.getById(id).subscribe(response => {
        console.log(response);
      });
      
    }

    id = this.route.snapshot.paramMap.get('id')
  ngOnInit() {
    
    this.personaForm = this.formBuilder.group({
      
      id: [''],
      nombre: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.minLength(9)]],
      domicilio_actual: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      dependiente:[this.id],
    });

  }
  save(){
    console.log(this.personaForm.value)
    let id = this.route.snapshot.paramMap.get('id')
    if(id != null){
      this.personaServices.add(this.personaForm.value).subscribe(response=>{
        console.log("ADD", response);
      });
    }
    
    this.router.navigate(['/persona']);
  }

}
