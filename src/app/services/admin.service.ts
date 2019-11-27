import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  endPoint ='https://serve-ecom.herokuapp.com/api/admin'
  constructor(private http:HttpClient) { }

  public persona(id,data): Observable<any> {
    return this.http.get<any>(`${this.endPoint}persona/${id}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    });
  }
  public dependiente(id,data): Observable<any> {
    return this.http.get<any>(`${this.endPoint}dependiente/${id}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    });
  }
  public egresado(id,data): Observable<any> {
    return this.http.get<any>(`${this.endPoint}egresado/${id}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    });
  }
  public egresadoescuela(id,data): Observable<any> {
    return this.http.get<any>(`${this.endPoint}egresadoescuela/${id}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    });
  }
  public formaciones(id,data): Observable<any> {
    return this.http.get<any>(`${this.endPoint}formaciones/${id}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    });
  }
  public capacitaciones(id,data): Observable<any> {
    return this.http.get<any>(`${this.endPoint}capacitaciones/${id}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    });
  }
  public empresas(id,data): Observable<any> {
    return this.http.get<any>(`${this.endPoint}empresas/${id}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    });
  }
  public experiencia(id,data): Observable<any> {
    return this.http.get<any>(`${this.endPoint}experiencia/${id}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    });
  }
}
