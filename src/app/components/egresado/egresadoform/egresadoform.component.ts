import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { EgresadosService } from 'src/app/services/egresados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-egresadoform',
  templateUrl: './egresadoform.component.html',
  styleUrls: ['./egresadoform.component.css']
})
export class EgresadoformComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private paisesService:PaisesService,
    private departamentosService:DepartamentosService,
    private provinciasService:ProvinciasService,
    private egresadosService:EgresadosService,
    private router: Router,
    private route: ActivatedRoute) { }
  egresadoform: FormGroup;
  paises;
    departamentos;
    usuarios;
    provincias;
  ngOnInit() {
    this.pais();
    this.depar();
    this.provin();
    this.egresadoform = this.formBuilder.group({
      id:  [''],
      codigo: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      celular: ['', [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]*')]],
      persona_id: [''],
      pais: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
    });
  }
  pais(){
    this.paisesService.getlist().subscribe(response => {
      this.paises= response;
      console.log(response)
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

  save(){
    let id = this.route.snapshot.paramMap.get('id')
   if(id != null){
      this.egresadosService.update(id, this.egresadoform.value).subscribe(response => {
        console.log(response)
      });;
      this.router.navigateByUrl('/profile');
    }else{
      console.log(this.egresadoform.value)
      //this.egresadosService.add(this.egresadoform.value).subscribe(response => {
      //});
    }
  }
}
