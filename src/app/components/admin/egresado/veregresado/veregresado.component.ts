import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-veregresado',
  templateUrl: './veregresado.component.html',
  styleUrls: ['./veregresado.component.css']
})
export class VeregresadoComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,private Jarwis: JarwisService, private token:TokenService, public router: Router) { }
    id
    user
  ngOnInit() {
    this. persona();
    
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }
  persona(){
    this.Jarwis.me(this.token.get()).subscribe(response=>{
       this.user= response;
      if(this.user.rol == 0){
        this.router.navigate(['']);
      }
    })
  }

}
