import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../enviroments/environment';
import {catchError, Observable, throwError} from 'rxjs';
import {Order} from '../interfaces/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  httpClient = inject(HttpClient);
  private readonly url = environment.url + '/orders';

  list(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.url).pipe(
      catchError(e => throwError(() => e)),
    );
  }

  getById(id: string) {
    return this.httpClient.get<Order>(`${this.url}/${id}`).pipe(
      catchError(e => throwError(() => e)),
    )
  }

  //partial = all fields to nullable
  update(id: string, order: Partial<Order>) {
    return this.httpClient.put<Order>(`${this.url}/${id}`, order).pipe(
      catchError(e => throwError(() => e)),
    )
  }

  delete(id: string) {
    return this.httpClient.delete<Order>(`${this.url}/${id}`).pipe(
      catchError(e => throwError(() => e)),
    )
  }
}
