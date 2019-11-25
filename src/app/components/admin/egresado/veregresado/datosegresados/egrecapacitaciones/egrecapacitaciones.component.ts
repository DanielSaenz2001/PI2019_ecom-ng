import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-egrecapacitaciones',
  templateUrl: './egrecapacitaciones.component.html',
  styleUrls: ['./egrecapacitaciones.component.css']
})
export class EgrecapacitacionesComponent implements OnInit {
  @Input() ID;
  constructor() { }

  ngOnInit() {
  }

}
