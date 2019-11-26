import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EscuelasService } from 'src/app/services/escuelas.service';

@Component({
  selector: 'app-escuelas',
  templateUrl: './escuelas.component.html',
  styleUrls: ['./escuelas.component.css']
})
export class EscuelasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private escuelasService:EscuelasService) { }
  escuelasForm: FormGroup;
  list;
  @Input() ID:string;
  ngOnInit() {
    this.escuelas();
    this.escuelasForm = this.formBuilder.group({
      id:  [''],
      nombre: ['', [Validators.required]],
      estado_acreditacion: ['', [Validators.required]],
      facultad_id: [''],
    });
  }
  escuelas(){
    this.escuelasService.getlist().subscribe(response => {
      this.list= response;
    });
  }
  saveEscuela(){
    this.escuelasForm.value.facultad_id= this.ID;
    console.log(this.escuelasForm.value)
      if(this.escuelasForm.value.id !== null){
        this.escuelasService.update(this.escuelasForm.value.id, this.escuelasForm.value).subscribe(response=>{
          this.escuelas();
        });
        
      }else{
        
        this.escuelasService.add(this.escuelasForm.value).subscribe(response=>{
          this.escuelas();
        });
        
      }
      this.borrar()
  }
  updateEscuela(id) {
    this.escuelasService.getById(id).subscribe(response =>{
    this.escuelasForm.setValue(response);
    })
  }
  delete(id) {
    this.escuelasService.delete(id).subscribe(response=>{
      this.escuelas();
    });
  }
  borrar(){
    this.escuelasForm.reset();
  }
}
