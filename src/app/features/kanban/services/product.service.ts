import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderProduct } from '../interfaces/product-interface';
import { environment } from '../../../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  url = environment.url;

  public get(): Observable<OrderProduct[]> {
    return this.http.get<OrderProduct[]>(`${this.url}/products`);
  }

  public listAll(
    page: number = 1,
    pageSize: number = 5,
    search: string | null,
  ): Observable<OrderProduct[]> {
    return this.http.get<OrderProduct[]>(`${this.url}/products`);
  }

  public getById(id: string): Observable<OrderProduct[]> {
    return this.http.get<OrderProduct[]>(`${this.url}/products/${id}`);
  }

  public listByName(name: string): Observable<OrderProduct[]> {
    //todo: better by route or query?
    return this.http.get<OrderProduct[]>(`${this.url}/products/${name}`);
  }
}
