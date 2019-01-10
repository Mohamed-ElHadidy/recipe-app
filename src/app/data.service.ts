import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private app_key: string = '056c238ee6d7e2f113089e04e8a43064';
  private app_id: string = '057fc72b';
  private url: string = 'https://api.edamam.com/search?';

  constructor( private http: HttpClient ) { }

  getRecipesData(querry: string): Observable<any> {
    const fullUrl = `${this.url}q=${querry}&from=0&to=20&app_id=${this.app_id}&app_key=${this.app_key}`;
    return this.http.get(fullUrl);
  }

}
