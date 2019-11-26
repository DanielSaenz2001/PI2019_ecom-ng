import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  endPoint ='http://localhost:8000/api/admin'
  constructor(private http:HttpClient) { }

  public persona(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}persona/${id}`);
  }
  public dependiente(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}dependiente/${id}`);
  }
  public egresado(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}egresado/${id}`);
  }
  public egresadoescuela(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}egresadoescuela/${id}`);
  }
  public formaciones(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}formaciones/${id}`);
  }
  public capacitaciones(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}capacitaciones/${id}`);
  }
  public empresas(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}empresas/${id}`);
  }
  public experiencia(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}experiencia/${id}`);
  }
}
