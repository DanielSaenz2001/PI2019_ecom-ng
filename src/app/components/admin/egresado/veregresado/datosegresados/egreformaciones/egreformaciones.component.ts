import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-egreformaciones',
  templateUrl: './egreformaciones.component.html',
  styleUrls: ['./egreformaciones.component.css']
})
export class EgreformacionesComponent implements OnInit {
  @Input() ID;
  constructor() { }

  ngOnInit() {
  }

}
