import { Component, OnInit } from '@angular/core';
import { FacultadesService } from 'src/app/services/facultades.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private facultadService: FacultadesService) { 
    this.facultades();
  }
list;
ID;
facultadForm: FormGroup;
  ngOnInit() {
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
      console.log(response)
    });
  }
  delete(id) {
    this.facultadService.delete(id).subscribe(response=>{
      this.facultades();
    });
  }
  saveFacultad(){
      this.facultadService.add(this.facultadForm.value).subscribe(response=>{
        this.facultades();
      });
      this.facultadForm.reset();
  }

  updateFacultad(id) {
    console.log('ID: ', id)
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
}
