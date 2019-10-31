import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../../../services/persona.service';

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
    private router: Router) { 
      let id =this.route.snapshot.paramMap.get('id')
      this.personaServices.getById(id).subscribe(response => {
        console.log(response);
      });
      
    }


  ngOnInit() {
    this.personaForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.minLength(9)]],
      domicilio_actual: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      dependiente:null
    });
    let id = this.route.snapshot.paramMap.get('id')
    if(id!=null){
      this.personaServices.getById(id).subscribe(response =>{
        this.personaForm.setValue(response);
        console.log(response)
      })
    }
  }
  save(){
    console.log(this.personaForm.value)
    let id = this.route.snapshot.paramMap.get('id')
    if(id != null){
      this.personaServices.update(id, this.personaForm.value)
      .subscribe(response=>{
       console.log(response);
      });
    }else{
      this.personaServices.add(this.personaForm.value).subscribe(response=>{
        console.log("ADD", response);
      });
    }
    
    this.router.navigate(['/persona']);
  }


}
