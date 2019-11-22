import { Component, OnInit } from '@angular/core';



import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
@Component({
  selector: 'app-capacitacionesfrom',
  templateUrl: './capacitacionesfrom.component.html',
  styleUrls: ['./capacitacionesfrom.component.css']
})
export class CapacitacionesfromComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private empresasService:CapacitacionesService) { }
  capacitacionesFrom: FormGroup;

  ngOnInit() {
    this.capacitacionesFrom = this.formBuilder.group({
      id:  [''],
      nombre: ['', [Validators.required]],
      informacion: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      precio: [''],
      rutas: ['', [Validators.required]],
      egresado_id: [''],
      empresa_id: [''],
    });
  }
  save(){
    this.capacitacionesFrom.value.egresado_id=1;
    console.log(this.capacitacionesFrom.value)
    //this.empresasService.add(this.capacitacionesFrom.value).subscribe();
  }
}




