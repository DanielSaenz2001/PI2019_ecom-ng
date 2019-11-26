import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { EventosService } from 'src/app/services/eventos.service';
import { TokenService } from 'src/app/services/token.service';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  evento: any;
  constructor( private formBuilder: FormBuilder, private eventosService:EventosService, private Jarwis: JarwisService, private token:TokenService) { }
  eventoForm: FormGroup;
  myFile;
  f;
  empresas;
  list;
  ngOnInit() {
    this.listar()
    this.eventos();
    this.eventoForm = this.formBuilder.group({
      id:  [''],
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
    var myFormData = new FormData();
    myFormData.append('id', this.eventoForm.value.id);
    myFormData.append('nombre', this.eventoForm.value.nombre);
    myFormData.append('descripcion', this.eventoForm.value.descripcion);
    myFormData.append('imagen', this.filedata);
    myFormData.append('fec_inicio', this.eventoForm.value.fec_inicio);
    myFormData.append('fec_fin', this.eventoForm.value.fec_fin);
   this.eventosService.add(myFormData).subscribe(response => {
    this.eventos()
  });
  this.borrar()
  }  
  eventos(){
    this.eventosService.getlist().subscribe(response => {
      this.evento= response;
    });
  }
  detalles(id){
    this.eventosService.getById(id).subscribe(response =>{
      this.eventoForm.setValue(response);
    });
    
  }
  update(id){
    this.eventosService.update(id, this.eventoForm.value).subscribe(response => {
      this.eventos();
    });
    this.borrar();
  }
  delete(id) {
    this.eventosService.delete(id).subscribe(response=>{
      this.eventos();
    });
  }
  listar(){
    this.Jarwis.me(this.token.get()).subscribe(response => {
      this.list= response;
    });
  }
  borrar(){
    this.eventoForm.reset()
  }
}
