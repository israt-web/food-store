import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  getProduct(): Observable<any> {
    const url = '/assets/data/product.json';

    return this.http.get<any>(url);
  }
}
