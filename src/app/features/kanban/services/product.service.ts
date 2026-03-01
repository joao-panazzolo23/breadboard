import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product-interface';
import {environment} from '../../../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  url = environment.url;

  public get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  public listAll(page: number = 1, pageSize: number = 5, search: string | null): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  public getById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products/${id}`);
  }
}
