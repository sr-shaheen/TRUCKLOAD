import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IContainer } from '../../shared/models/api-container.model';
import { Vendor } from '../models/vendor.model';
import {Customer} from '../models/customer.model';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  addCustomer(data: Customer): Observable<boolean> {
    const postData = { item: data };
    return this.http
      .post<any>('http://localhost:7075/api/customer', postData)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }
  addVendor(data: Vendor): Observable<boolean> {
    const postData = { item: data };
    return this.http
      .post<any>('http://localhost:7075/api/customer', postData)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }
  updateCustomer(id: string, customer: Customer): Observable<boolean> {
    return this.http
      .put<any>(`http://localhost:7075/api/customer/${id}`, customer)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }
  updatevendor(id: string, vendor: Vendor): Observable<boolean> {
    return this.http
      .put<any>(`http://localhost:7075/api/vendor/${id}`, vendor)
      .pipe(
        map((response) =>
          response.isExecuted && response.data ? true : false
        ),
        catchError((error) => of(false))
      );
  }
  getCustomerList(): Observable<Vendor[]> {
    return this.http.get<any>(`http://localhost:7075/api/customerlist`).pipe(
      map((response) =>
        response? response.data : null
      ),
      catchError((error) => of(null))
    );
  }
}
