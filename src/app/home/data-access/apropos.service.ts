import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/envirnments/environment.prod';
import { AnswerQuestion } from '../utils/models/faq';
import { history } from '../utils/models/history';
import { RouterApi } from '../utils/Routes';

@Injectable({
  providedIn: 'root'
})
export class AproposService {

  constructor( private http : HttpClient) { }

  getHistory(): Observable<history[]> {
    return this.http.get<history[]>(`${environment.url}${RouterApi.history}`);
  }
  getQuestionResponse(): Observable<AnswerQuestion[]> {
    return this.http.get<AnswerQuestion[]>(`${environment.url}${RouterApi.faq}`);
  }
  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url}${RouterApi.doctors}`);
  }

  postContact( data : any){ 
    return this.http.get<any[]>(`${environment.url}${RouterApi.contact}`);

  }

}
