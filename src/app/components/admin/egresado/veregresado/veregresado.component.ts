import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veregresado',
  templateUrl: './veregresado.component.html',
  styleUrls: ['./veregresado.component.css']
})
export class VeregresadoComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,) { }
    id
  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

}
