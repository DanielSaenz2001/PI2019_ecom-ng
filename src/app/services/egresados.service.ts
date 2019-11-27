import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EgresadosService {

  endPoint ='https://serve-ecom.herokuapp.com/api/egresados';
  constructor(private http:HttpClient) { }

  public getlist(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}`)
  }
  public add(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data);
  }
  public update(id, data): Observable<any> {
      return this.http.put<any>(`${this.endPoint}/${id}`, data);
  }
  public updateestado(id, data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}estado/${id}`, data);
  }
  public delete(id): Observable<any> {
      
      return this.http.delete<any>(`${this.endPoint}/${id}`);
  }
  public getById(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
  egresados(data) {
    return this.http.get(`${this.endPoint}datos`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  public buscar(data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}buscar`, data);
  }
}
