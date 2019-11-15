import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {

  endPoint ='http://localhost:8000/api/facultad'
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
  public delete(id): Observable<any> {
      
      return this.http.delete<any>(`${this.endPoint}/${id}`);
  }
  public getById(id): Observable<any> {
    console.log(id)
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
}
