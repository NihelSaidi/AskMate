import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  endpoint: string = "http://localhost:3000/question";

  constructor(private httpClient:HttpClient) { }
  public getQuestions(): Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}/get-question`);
  }

  public addQuestion(question): Observable<any> {
    return this.httpClient.post<any>(`${this.endpoint}/add-question`, question);
  }
}
