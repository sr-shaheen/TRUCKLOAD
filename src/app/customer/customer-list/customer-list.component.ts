import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { AsyncService } from 'src/app/shared/services/async.service';
import { CustomerService } from '../services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { Vendor } from '../models/vendor.model';
import { merge, Subscription, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['sl', 'Customer', 'actions'];
  dataSource = new MatTableDataSource<Vendor>();
  constructor(
    private commonService: CommonService,
    public asyncService: AsyncService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.loadCustomerList();
  }
  loadCustomerList = (): void => {
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.asyncService.start();
          return this.customerService.getCustomerList(
            // this.sort.active,
            // this.sort.direction
          );
        }),
        map((data) => {
          this.asyncService.finish();
       //   this.resultsLength = data.length; // demo
          return data;
        }),
        catchError(() => {
          this.asyncService.finish();
          return of([] as any);
        })
      )
      .subscribe((data) => {
        this.dataSource.data = data != null ? data : [];
      });
  };

}
