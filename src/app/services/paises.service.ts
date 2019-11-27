import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  endPoint ='https://serve-ecom.herokuapp.com/api/paises'
  endPoint2 ='https://serve-ecom.herokuapp.com/api/lugares'
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
  
}
