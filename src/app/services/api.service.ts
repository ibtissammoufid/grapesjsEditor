import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPage(page : String): Observable<any> {
    return this.http.get(API_URL + 'get?pagename='+page, { responseType: 'json'});
  }

  savePage(body : any): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post<any>(API_URL + 'save', body, {'headers':headers});
  }
}
