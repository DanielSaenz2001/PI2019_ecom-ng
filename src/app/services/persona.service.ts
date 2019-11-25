import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaService {

  endPoint ='https://serve-ecom.herokuapp.com/api/persona'
  constructor(private http:HttpClient) { }

  public getlist(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}`)
  }
  public getById(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
  public add(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data);
  }
  public update(id, data): Observable<any> {
      return this.http.put<any>(`${this.endPoint}/${id}`, data);
  }
  public delete(id): Observable<any> {
      
      return this.http.delete<any>(`${this.endPoint}/${id}`);
  }
  public getlistUsuarios(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}Usuarios`)
  }
  public updateuser(id, data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}Usuarios/${id}`, data);
  }
  public updateuserol(id, data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}Usuarioss/${id}`, data);
  }
}
