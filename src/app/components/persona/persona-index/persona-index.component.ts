import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
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
  usuarios;
  constructor(private personaService: PersonaService,private Jarwis: JarwisService, private token:TokenService) { 
      this.listar();
    }

  ngOnInit() {
    this.listar2();
    this.usuario();
  }

  delete(id) {
    this.personaService.delete(id).subscribe(response=>{
      this.listar();

    });
    
    }
    listar(){
      this.personaService.getlist().subscribe(response => {
        this.list= response;
        console.log("Lista de personas:", response)
      });
    }

    listar2(){
      this.Jarwis.users(this.token.get()).subscribe(response => {
        this.list2= response;
        console.log("dependientes: ",response)
      });
    }

    usuario(){
      this.Jarwis.me(this.token.get()).subscribe(response => {
        this.usuarios= response;
        console.log("datos usuario:", response)
      });
    }
}
