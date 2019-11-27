import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {

  endPoint ='https://serve-ecom.herokuapp.com/api/sugerencias'
  constructor(private http:HttpClient) { }

  public getlist(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}`)
  }
  public getlist2(): Observable<any>{
    return this.http.get<any>(`${this.endPoint}2`)
  }
  public getById(id): Observable<any> {
    console.log(id)
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
  public add(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data);
  }
  public update(id, data): Observable<any> {
      return this.http.put<any>(`${this.endPoint}/${id}`, data);
  }
  public update2(id, data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}2/${id}`, data);
}
  public delete(id): Observable<any> {
      
      return this.http.delete<any>(`${this.endPoint}/${id}`);
  }
}
