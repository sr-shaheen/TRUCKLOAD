import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IContainer } from '../../shared/models/api-container.model';
import { Truck } from '../models/truck.model';
import { OrdersBoardItem } from '../models/orders-board-item.model';
import { Order } from '../models/order.model';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  addTruck(truck: Truck): Observable<boolean> {
   // const postData = { item: truck };
    return this.http.post<any>('https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/truck', truck).pipe(
      map((response) => (response.isExecuted && response.data ? true : false)),
      catchError((error) => of(false))
    );
  }
  addOrder(order: Order): Observable<boolean> {
   // const postData = { item: order };
    return this.http.post<any>('https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/order', order).pipe(
      map((response) => (response.isExecuted && response.data ? true : false)),
      catchError((error) => of(false))
    );
  }
  getOrdersBoard(): Observable<any[]> {
    return this.http.get<any>("http://localhost:7075/api/trucks").pipe(
      map(response =>
        response.isExecuted && response.data ? response.data : []
      ),
      catchError(error => of([]))
    );
  }
  updateBoardStatus(id: string, data: any): Observable<boolean> {
    return this.http
      .put<IContainer>(`/service/appointment-queue/${id}`, data)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }

  getCustomer(): Observable<any[]> {
    return this.http.get<any>("http://localhost:7075/api/trucks").pipe(
      map(response =>
        response.isExecuted && response.data ? response.data : []
      ),
      catchError(error => of([]))
    );
  }
  getVendor(): Observable<any[]> {
    return this.http.get<any>("https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/all?orientation=vendor").pipe(
      map(response =>
        response.isExecuted && response.data ? response.data : []
      ),
      catchError(error => of([]))
    );
  }
}
