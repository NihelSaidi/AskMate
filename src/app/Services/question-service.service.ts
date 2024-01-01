import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  endpoint: string = "http://localhost:3000/users";

  constructor(private httpClient:HttpClient) { }
  public getQuestions(){ 
    return this.httpClient.get<{questions :any}>(this.endpoint + '/');
  }

}
