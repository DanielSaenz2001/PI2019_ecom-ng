import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  constructor( private formBuilder: FormBuilder, private eventosService:EventosService) { }
  eventoForm: FormGroup;
  ngOnInit() {
    this.eventoForm = this.formBuilder.group({
      id:  ['',[Validators.minLength(8)]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fec_inicio: ['', [Validators.required]],
      fec_fin: ['', [Validators.required]],
      imagen: []
    });
  }
  filedata:any;
  fileEvent(e){
        this.filedata = e.target.files[0];
  }
  save(f: NgForm) {
    this.eventoForm.value.imagen = this.filedata
    console.log(this.eventoForm.value.nombre)

    var myFormData = new FormData();
    myFormData.append('id', this.eventoForm.value.id);
    myFormData.append('nombre', this.eventoForm.value.nombre);
    myFormData.append('descripcion', this.eventoForm.value.descripcion);
    myFormData.append('imagen', this.filedata);
    myFormData.append('fec_inicio', this.eventoForm.value.fec_inicio);
    myFormData.append('fec_fin', this.eventoForm.value.fec_fin);
    this.eventosService.add(myFormData).subscribe(response=>{
      console.log(response)
    })
    //
    //this.jarwisService.profile(myFormData);
    /*this.eventosService.add(this.eventoForm.value).subscribe(response=>{
      console.log(response)
    });*/
  }  
  
}
