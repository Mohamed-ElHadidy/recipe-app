import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private app_key: string = '';
  private app_id: string = '';
  private querry: string = '';
  private url: string = '';

  constructor( private http: HttpClient ) { }

  getRecipesData(querry: string): Observable<any> {
    return this.http.get(this.url);
  }

}
