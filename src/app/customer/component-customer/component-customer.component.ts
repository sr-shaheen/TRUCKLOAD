import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable } from 'rxjs';
import { CustomerAddModalComponent } from '../customer-add-modal/customer-add-modal.component';
import { CommonService } from 'src/app/shared/services/common.service';
import { AsyncService } from 'src/app/shared/services/async.service';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';
import { MatTableDataSource } from '@angular/material/Table';
@Component({
  selector: 'app-component-customer',
  templateUrl: './component-customer.component.html',
  styleUrls: ['./component-customer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentCustomerComponent implements OnInit {
  customerListObserver: Observable<Customer[]>;
  customerListSub: Subscription;
  customerList: any;
  dataSource: MatTableDataSource<Customer>;

  constructor(
    public dialog: MatDialog,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList = () => {
    this.asyncService.start();
    this.customerListSub = this.customerService
      .getCustomerList()
      .subscribe((data) => {
        this.customerList = data;
        this.asyncService.finish();
        this.dataSource = new MatTableDataSource<Customer>(this.customerList);
        //this.changeDetectorRef.detectChanges();
        //    this.dataSource.paginator = this.paginator;
        this.customerListObserver = this.dataSource.connect();
      });
  };
  customerAdd(): void {
    console.log('aschi');

    const dialogRef = this.dialog.open(CustomerAddModalComponent, {
      width: '400px',
      height: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  ngOnDestroy(): void {
    if (this.customerListSub) {
      this.customerListSub.unsubscribe();
    }
  }
}
