import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private jarwisService:JarwisService) { }
  ngOnInit() {
  }
  @Input() ID:string;
  filedata:any;
  fileEvent(e){
        this.filedata = e.target.files[0];
  }
  onSubmit(f: NgForm) {
    var myFormData = new FormData();
    myFormData.append('id', this.ID);
    myFormData.append('image', this.filedata);
    this.jarwisService.profile(myFormData);
  }                    
}
