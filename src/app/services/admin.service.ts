import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  endPoint ='https://serve-ecom.herokuapp.com/api/admin'
  constructor(private http:HttpClient) { }

  public persona(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}persona/${id}`);
  }
  public dependiente(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}dependiente/${id}`);
  }
}
