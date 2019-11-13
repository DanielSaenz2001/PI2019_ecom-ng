import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private especialidadesService:EspecialidadesService) { }

  especialidadForm: FormGroup;
  list;
  @Input() ID:string;
  ngOnInit() {
    this.especialidades();
    this.especialidadForm = this.formBuilder.group({
      id:  [''],
      nombre: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });
  }
  especialidades(){
    this.especialidadesService.getlist().subscribe(response => {
      this.list= response;
      console.log(response)
    });
  }
  saveEspecialidades(){
    this.especialidadForm.value.escuela_profesional_id=this.ID;
   this.especialidadesService.add(this.especialidadForm.value).subscribe(response=>{
        this.especialidades();
      });
      this.especialidadForm.reset();
    }
  updateEspecialidades(id) {
    console.log('ID: ', id)
    this.especialidadesService.getById(id).subscribe(response =>{
    this.especialidadForm.setValue(response);
    })
  }
  borrar(){
    this.especialidadForm.reset();
  }
  delete(id) {
    this.especialidadesService.delete(id).subscribe(response=>{
      this.especialidades();
    });
  }

}
