import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  myFile;
  constructor(private Jarwis: JarwisService, private token:TokenService
    , private personaServices: PersonaService,
    private formBuilder: FormBuilder) { }
  dependientes;
  PERSONAID;
  public list;
  personaForm: FormGroup;
  ngOnInit() {
    /*this.dependientesList();*/
    this.PersonaList();
    this.personaForm = this.formBuilder.group({
      id:  [''],
      nombre: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]],
      provincia: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      fec_nacimiento: ['', [Validators.required]],
      est_civil: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      activo: ['', [Validators.required]],
      dependiente:null
    });
  }
  PersonaList(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= response;
    });
  }
  
  persona(id){
    this.PERSONAID = id;
    this.personaServices.getById(this.PERSONAID).subscribe(response =>{
      this.personaForm.setValue(response);
    })
  }
  dependientesList(){
    this.Jarwis.users(this.token.get()).subscribe(response => {
      this.dependientes= response;
    });
  }
  //-------------------------------------------------------------------------
    
  save(){
    this.personaServices.update(this.PERSONAID, this.personaForm.value).subscribe(response => {
      this.PersonaList();
      console.log(response)
    });;
  }
  deleteDependiente(id){
    this.personaServices.delete(id).subscribe(response=>{
      this.dependientesList();
    });
  }

}
