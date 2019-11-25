import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private personaService:PersonaService,private formBuilder: FormBuilder) { }
  usuarios;
  user: FormGroup;
  ngOnInit() {
    this.usuariosList();
    this.user = this.formBuilder.group({
      id:  [''],
      ac: [''],
      rol: [''],
    });
  }
  usuariosList(){
    this.personaService.getlistUsuarios().subscribe(response=>{
      this.usuarios = response
    })
  }
  actu(id,ac){
    if(ac == true && ac == !null){
      ac = false;
      this.user.value.ac=ac
      this.personaService.updateuser(id,this.user.value).subscribe(response => {
        this.usuariosList();
      });;
    }else{
      ac = true;
      this.user.value.ac=ac
      this.personaService.updateuser(id, this.user.value).subscribe(response => {
        this.usuariosList();
      });;
    }
  }
  rol(id,rol){
    if(rol == '0'){
      rol = '1';
      this.user.value.rol=rol
      this.personaService.updateuserol(id,this.user.value).subscribe(response => {
        this.usuariosList();
        console.log(response)
      });;
    }else{
      rol = '0';
      this.user.value.rol=rol
      this.personaService.updateuserol(id, this.user.value).subscribe(response => {
        this.usuariosList();
        console.log(response)
      });;
    }
  }
}
