import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:any = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }
  getData(){
      return this.http.put<any>(this.url,FormData);
    }
}
