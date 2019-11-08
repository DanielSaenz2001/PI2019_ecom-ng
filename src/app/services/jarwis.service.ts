import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarwisService {
  private baseUrl = 'https://serve-ecom.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }
  me(data) {
    return this.http.get(`${this.baseUrl}/usuario`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  users(data) {
    return this.http.get(`${this.baseUrl}/users`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  users2() {
    return this.http.get(`${this.baseUrl}/users`)
  }
}
