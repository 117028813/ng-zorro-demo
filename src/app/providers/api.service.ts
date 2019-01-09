import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  post(path, body, options={}) {
    if (path.startsWith('http')) {
      return this.http.post(path, JSON.stringify(body), options)
    } else {
      return this.http.post(this.url + path, JSON.stringify(body), options)
    }
  }

}
