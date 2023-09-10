import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/envirnments/environment.prod';
import { RouterApi } from '../utils/Routes';

@Injectable({
  providedIn: 'root'
})
export class ServicePageService {

  constructor(private http : HttpClient) { }
  getTopQualitites(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url}${RouterApi.qualities}`);
  }

 }
