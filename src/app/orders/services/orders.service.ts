import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IContainer } from '../../shared/models/api-container.model';
import { Truck } from '../models/truck.model';
import { OrdersBoardItem } from '../models/orders-board-item.model';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  addTruck(trucks: Truck): Observable<boolean> {
    return this.http.post<any>('http://localhost:7075/api/trucks', trucks).pipe(
      map((response) => (response.isExecuted && response.data ? true : false)),
      catchError((error) => of(false))
    );
  }
}
