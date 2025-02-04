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
    return this.http.get<any>("https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/all").pipe(
      map(response =>
        response.isExecuted && response.data ? response.data : []
      ),
      catchError(error => of([]))
    );
  }
  updateOrderBoard( data: any): Observable<boolean> {
    return this.http
      .patch<IContainer>("https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/order", data)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }

  getCustomer(): Observable<any[]> {
    return this.http.get<any>("https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/all?orientation=customer").pipe(
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
  ownTruck(): Observable<any[]> {
    return this.http.get<any>("https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/status?status=available").pipe(
      map(response =>
        response.isExecuted && response.data ? response.data : []
      ),
      catchError(error => of([]))
    );
  }
  otherTruck(): Observable<any[]> {
    return this.http.get<any>("https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/status?status=returned").pipe(
      map(response =>
        response.isExecuted && response.data ? response.data : []
      ),
      catchError(error => of([]))
    );
  }


  addlease(lease: any): Observable<boolean> {
    // const postData = { item: order };
     return this.http.post<any>('https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/lease', lease).pipe(
       map((response) => (response.isExecuted && response.data ? true : false)),
       catchError((error) => of(false))
     );
   }

   updateConfirmed( data: any): Observable<boolean> {
    return this.http
      .patch<IContainer>("https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/status", data)
      .pipe(
        map((response) =>
          response.isExecuted ? true : false
        ),
        catchError((error) => of(false))
      );
  }

  getLease(orderId:string): Observable<any[]> {
    return this.http.get<any>(`https://lqjaa1c4yi.execute-api.ap-southeast-1.amazonaws.com/dev/object?pk=${orderId}&sk=lease`).pipe(
      map(response =>
        response.isExecuted && response.data ? response.data : []
      ),
      catchError(error => of([]))
    );
  }
}
