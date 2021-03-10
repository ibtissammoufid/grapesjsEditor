import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ExportService {

  private baseURL = "http://localhost:8082/api/";
  mytext: any;
  myjson: any;

  constructor(private httpClient: HttpClient) { }

  getJson(text: any): Observable<Object>{
    this.mytext= text;
    return text;
    //return this.httpClient.post(`${this.baseURL}`, text);
  }

  getJsonText(): Observable<Object>{
    return this.mytext;
    //return this.httpClient.post(`${this.baseURL}`, text);
  }
 
 
}
