import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/services/examen/imagenes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private imagenesService:ImagenesService) { }
  imagenesForm: FormGroup
  imagenes
  ngOnInit() {
    this.ImagenesList();
    this.imagenesForm = this.formBuilder.group({
      idImagen:  [''],
      urlImagen: ['', [Validators.required]],
      detalleImagen: ['', [Validators.required]],
      es_principalImagen: ['', [Validators.required]],
      ordenImagen: ['', [Validators.required ,Validators.min(1),Validators.max(100)]],
      catalogoidImagen: ['', [Validators.required]]
    });
  }
  ImagenesList(){
    this.imagenesService.getlist().subscribe(response=>{
      this.imagenes=response
    })
  }
  save(){
    if(this.imagenesForm.value.id == null){
      console.log(this.imagenesForm.value)
      this.imagenesService.add(this.imagenesForm.value).subscribe(response=>{
        this.ImagenesList()
      });
    }else{
      this.imagenesService.update( this.imagenesForm.value.id,this.imagenesForm.value).subscribe(response=>{
        this.ImagenesList();
      });
    }
  }
}
