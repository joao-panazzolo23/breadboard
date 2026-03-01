import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../enviroments/environment';
import {catchError, Observable, throwError} from 'rxjs';
import {OrderInterface} from '../interfaces/order-interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  httpClient = inject(HttpClient);
  private readonly url = environment.url + '/orders';

  list(): Observable<OrderInterface[]> {
    return this.httpClient.get<OrderInterface[]>(this.url).pipe(
      catchError(e => throwError(() => e)),
    );
  }

  getById(id: string) {
    return this.httpClient.get<OrderInterface>(`${this.url}/${id}`).pipe(
      catchError(e => throwError(() => e)),
    )
  }

  //partial = all fields to nullable
  update(id: string, order: Partial<OrderInterface>) {
    return this.httpClient.put<OrderInterface>(`${this.url}/${id}`, order).pipe(
      catchError(e => throwError(() => e)),
    )
  }

  delete(id: string) {
    return this.httpClient.delete<OrderInterface>(`${this.url}/${id}`).pipe(
      catchError(e => throwError(() => e)),
    )
  }
}
