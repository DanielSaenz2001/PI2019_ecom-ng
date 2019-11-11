import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-persona-index',
  templateUrl: './persona-index.component.html',
  styleUrls: ['./persona-index.component.css']
})
export class PersonaIndexComponent implements OnInit {

  list;
  list2;

  constructor(private personaService: PersonaService,private Jarwis: JarwisService, private token:TokenService) { 
      this.listar();
    }

  ngOnInit() {
    this.listar();
    this.listar2();
  }

  delete(id) {
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

    listar2(){
      this.Jarwis.users2().subscribe(response => {
        this.list2= response;
      });
    }
}
