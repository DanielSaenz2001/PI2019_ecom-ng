import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EgresadoescuelasService {

  endPoint ='http://localhost:8000/api/egresadoescuelas'
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
  
  getlist2(data) {
    return this.http.get(`${this.endPoint}2`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
}
