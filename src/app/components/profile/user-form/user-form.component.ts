import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { JarwisService } from 'src/app/services/jarwis.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  personaForm: FormGroup;
  constructor(private jarwisService:JarwisService, private personaServices: PersonaService,
    private formBuilder: FormBuilder,private router: Router) { }
  ngOnInit() {
    console.log(this.PERSONAID)
    this.personaServices.getById(this.PERSONAID).subscribe(response =>{
      this.personaForm.setValue(response);
    })
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
  @Input() ID:string;
  @Input() PERSONAID:string;
  filedata:any;
  fileEvent(e){
        this.filedata = e.target.files[0];
  }
  onSubmit(f: NgForm) {
    var myFormData = new FormData();
    myFormData.append('id', this.ID);
    myFormData.append('image', this.filedata);
    this.jarwisService.profile(myFormData);
    console.log(myFormData)
  }   
  save(){
    this.personaServices.update(this.PERSONAID, this.personaForm.value).subscribe(response => {
      console.log(response)
    });;
    this.router.navigateByUrl('/profile');
  }                 
}
