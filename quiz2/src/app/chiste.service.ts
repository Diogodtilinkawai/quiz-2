import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChisteService {
  private apiurl = 'https://api.chucknorris.io/jokes/random';
  constructor(private http: HttpClient) { }
  chistes() {
    return this.http.get(this.apiurl);
  }
}
