import { Component, OnInit } from '@angular/core';
import { FacultadesService } from 'src/app/services/facultades.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private facultadService: FacultadesService) { }
list;
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
  save(){
    console.log(this.facultadForm.value.id)
    if(this.facultadForm.value.id != null){
      this.facultadService.update(this.facultadForm.value.id, this.facultadForm.value)
      .subscribe();
      this.router.navigateByUrl('/facultades');
    }else{
      this.facultadService.add(this.facultadForm.value).subscribe();
    }
  }
}
