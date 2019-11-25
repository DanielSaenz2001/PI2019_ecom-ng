import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-egreempresas',
  templateUrl: './egreempresas.component.html',
  styleUrls: ['./egreempresas.component.css']
})
export class EgreempresasComponent implements OnInit {
  @Input() ID;
  constructor() { }

  ngOnInit() {
  }

}
