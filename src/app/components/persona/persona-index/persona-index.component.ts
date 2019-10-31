import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-persona-index',
  templateUrl: './persona-index.component.html',
  styleUrls: ['./persona-index.component.css']
})
export class PersonaIndexComponent implements OnInit {

  list;

  constructor(private personaService: PersonaService) { 
      this.listar();
    }

  ngOnInit() {
    this.listar();
  }

  delete(id) {
    console.log("cliente: "+ id );
    this.personaService.delete(id).subscribe(response=>{
      
      console.log(JSON.stringify(response ))
      this.listar();

    });
    
    }
    listar(){
      this.personaService.getlist().subscribe(response => {
        this.list= response;
      });
    }

}
