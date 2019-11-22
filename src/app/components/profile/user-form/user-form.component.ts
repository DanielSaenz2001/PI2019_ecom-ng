import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { JarwisService } from 'src/app/services/jarwis.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
  constructor(private jarwisService:JarwisService,private router: Router) { }
  ngOnInit() {

    
  }
                   
}
