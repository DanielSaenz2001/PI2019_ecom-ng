import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-egreexperiencia',
  templateUrl: './egreexperiencia.component.html',
  styleUrls: ['./egreexperiencia.component.css']
})
export class EgreexperienciaComponent implements OnInit {
  @Input() ID;
  constructor() { }

  ngOnInit() {
  }

}
