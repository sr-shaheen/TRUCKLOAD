import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IContainer } from '../../shared/models/api-container.model';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  addCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<any>("http://localhost:7075/api/customer", customer).pipe(
      map(response => (response.isExecuted && response.data ? true : false)),
      catchError(error => of(false))
    );
  }
  updateCustomer(id:string,customer: Customer): Observable<boolean> {
    return this.http.put<any>(`http://localhost:7075/api/customer/${id}`, customer).pipe(
      map(response => (response.isExecuted && response.data ? true : false)),
      catchError(error => of(false))
    );
  }
}
