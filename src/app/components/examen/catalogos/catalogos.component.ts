import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/examen/catalogo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private catalogoService:CatalogoService) { }
  CatalogoForm: FormGroup
  catalogos
  ngOnInit() {
    this.ImagenesList();
    this.CatalogoForm = this.formBuilder.group({
      idCatalogo:  [''],
      nombreCatalogo: ['', [Validators.required]],
      codigoCatalogo: ['', [Validators.required]],
      precioCatalogo: ['', [Validators.required]],
      ordenCatalogo: ['', [Validators.required,Validators.min(1),Validators.max(100)]]
    });
  }
  ImagenesList(){
    this.catalogoService.getlist().subscribe(response=>{
      this.catalogos=response
    })
  }
  save(){
    if(this.CatalogoForm.value.id == null){
      console.log(this.CatalogoForm.value)
      this.catalogoService.add(this.CatalogoForm.value).subscribe(response=>{
        this.ImagenesList()
      });
    }else{
      this.catalogoService.update( this.CatalogoForm.value.id,this.CatalogoForm.value).subscribe(response=>{
        this.ImagenesList();
      });
    }
  }
}
