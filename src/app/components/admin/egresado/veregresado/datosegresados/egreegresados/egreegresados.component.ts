import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-egreegresados',
  templateUrl: './egreegresados.component.html',
  styleUrls: ['./egreegresados.component.css']
})
export class EgreegresadosComponent implements OnInit {
  @Input() ID;
  constructor() { }

  ngOnInit() {
  }

}
