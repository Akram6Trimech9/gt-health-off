import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Horraire, Slider } from '../utils/models';
import { Blog } from '../utils/models/blog';
import { Interventions } from '../utils/models/intervention';
import { RouterApi } from '../utils/Routes';
import { catchError, takeLast } from 'rxjs/operators';
import { environment } from 'src/envirnments/environment.prod';
import { AgencyInfo } from '../utils/models/agency-info';
import { Comment } from '../utils/models/comment';

@Injectable({
  providedIn: 'root'
})
export class AccPageService {
  constructor(private http: HttpClient) { }

  getSliders(): Observable<any> {
    return this.http.get<any>(`${environment.url}${RouterApi.slider}`);
  }

  getHorraire(): Observable<Horraire[]> {
    return this.http.get<Horraire[]>(`${environment.url}${RouterApi.horraire}`);
  }

  getInterventions(): Observable<Interventions[]> {
    return this.http.get<Interventions[]>(`${environment.url}${RouterApi.interventions}`);
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.url}${RouterApi.comments}`);
  }

  postSubscriber(sub: any): Observable<any> {
    return this.http.post<any>(`${environment.url}${RouterApi.subscribe}`, sub);
  }

  getPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.url}${RouterApi.blog}`);
  }

  getLastThreePosts(): Observable<Blog[]> {
    return this.getPosts().pipe(
      catchError((error) => {
        console.error('Error fetching blog posts:', error);
        return of([]); 
      }),
      takeLast(1)
    );
  }

  getLastThreeComments(): Observable<Comment[]> {
    return this.getComments().pipe(
      takeLast(3)
    );
  }
  getInfo() :Observable<AgencyInfo[]>{
     return this.http.get<AgencyInfo[]>(`${environment.url}${RouterApi.agence_info}`)
  }
 
}
