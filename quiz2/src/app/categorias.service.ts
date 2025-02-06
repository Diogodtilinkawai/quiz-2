import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private url = 'https://api.chucknorris.io/jokes/categories';
  constructor(private http : HttpClient) { }
  categorias() {
    return this.http.get(this.url);
  }
}
