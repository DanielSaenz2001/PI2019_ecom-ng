import { Component, OnInit } from '@angular/core';
import { FacultadesService } from 'src/app/services/facultades.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})

export class FacultadComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private facultadService: FacultadesService,
    private token:TokenService, private Jarwis:JarwisService
    , public router: Router) { 
    this.facultades();
  }
  user;
list;
ID;
facultadForm: FormGroup;
  ngOnInit() {
    this.persona();
    this.facultades();
    this.facultadForm = this.formBuilder.group({
      id:  [''],
      nombre: ['', [Validators.required]],
      acronimo: ['', [Validators.required]],
    });
  }
  
  facultades(){
    this.facultadService.getlist().subscribe(response => {
      this.list= response;
    });
  }
  delete(id) {
    this.facultadService.delete(id).subscribe(response=>{
      this.facultades();
    });
  }
  saveFacultad(){
    if(this.facultadForm.value.id !== null){
      this.facultadService.update(this.facultadForm.value.id, this.facultadForm.value).subscribe(response=>{
        this.facultades()
      });;
      this.facultadForm.reset();
      
    }else{
      this.facultadService.add(this.facultadForm.value).subscribe(response=>{
        this.facultades();
      });
      this.facultadForm.reset();
    }
     this.borrar()
  }

  updateFacultad(id) {
    this.facultadService.getById(id).subscribe(response =>{
    this.facultadForm.setValue(response);

    })
  }
  borrar(){
    this.facultadForm.reset();
  }
  id(id){
    this.ID = id;
  }
  persona(){
    this.Jarwis.me(this.token.get()).subscribe(response=>{
       this.user= response;
      if(this.user.rol == 0){
        this.router.navigate(['']);
      }
    })
  }
}
