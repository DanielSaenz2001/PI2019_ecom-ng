import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom-ng';
  url ='http://localhost:8000/';
  ngOnInit() {
    console.log("Grupo 4")
  }
}
