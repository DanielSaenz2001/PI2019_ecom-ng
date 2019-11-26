import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-egrepersona',
  templateUrl: './egrepersona.component.html',
  styleUrls: ['./egrepersona.component.css']
})
export class EgrepersonaComponent implements OnInit {
  @Input() ID;
  constructor(private personaServices: PersonaService,
    private formBuilder: FormBuilder,private adminService:AdminService) { }
    dependientes;
    PERSONAID;
    public list;
    personaForm: FormGroup;
  ngOnInit() {
    
    this.PersonaList();
    this.dependientesList();
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
    this.adminService.persona(this.ID).subscribe(response => {
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
    this.adminService.dependiente(this.ID).subscribe(response => {
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
