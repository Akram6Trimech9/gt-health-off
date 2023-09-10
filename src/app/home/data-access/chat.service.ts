import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '../utils/Routes';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _http:HttpClient) { }
  getRecommendations(message: string) {
    return this._http.post<string[]>(`${RouterApi.recommendations}`, { message });
  }
}
