import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  endpoint: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }


  // user: {firstName, lastName, tel, email, pwd}
  signup(user) {
    return this.httpClient.post<{}>(`${this.endpoint}/signup`, user);
  }

  login(credentials: { email: string; pwd: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.endpoint}/login`, credentials);
  }
  // Get User By id 
  getUser(userId): Observable<any> {
    return this.httpClient.get(`${this.endpoint}/${userId}`);
  }


}