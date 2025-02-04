import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsyncService } from 'src/app/shared/services/async.service';
import { Subscription, Observable } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { OrderService } from '../services/orders.service';
import { map, startWith } from 'rxjs/operators';

import { MatDialogRef } from '@angular/material/dialog';
import { Order } from '../models/order.model';

export interface Customer {
  customer_id: string;
  name: string;
  phone: string;
  email?: string;
  image_path: string;
}
@Component({
  selector: 'app-order-add-modal',
  templateUrl: './order-add-modal.component.html',
  styleUrls: ['./order-add-modal.component.scss'],
})
export class OrderAddModalComponent implements OnInit, OnDestroy {
  formId = 'orderFrom';

  orderAddSub: Subscription;
  loadCustomerSub: Subscription;

  form: FormGroup;

  customerControl = new FormControl();
  filteredStates: Observable<Customer[]>;

  truckTypes = [];

  capacities: any[] = [
    { name: '3 ton', value: '3' },
    { name: '5 ton', value: '5' },
    { name: '7 ton', value: '7' },
  ];
  types: any[] = [
    { name: 'Covered', value: 'covered' },
    { name: 'Open', value: 'open' },
  ];
  customers: Customer[] = [];

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<OrderAddModalComponent>
  ) {}

  ngOnInit(): void {
    this.loadCustomerSub = this.orderService.getCustomer().subscribe(
      (data) => {
        if (data) {
          this.customers = data;
        } else {
          this.asyncService.finish();
          this.commonService.showErrorMsg('Error! Customers could not found');
        }
      },
      (error) => {
        this.asyncService.finish();
        this.commonService.showErrorMsg('Error! Customers could not found');
      }
    );
    this.filteredStates = this.customerControl.valueChanges.pipe(
      startWith(''),
      map((state) =>
        state ? this._filterStates(state) : this.customers.slice()
      )
    );
    this.form = this.fb.group({
      customer_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      expected_delivery_date: [''],
      loading_date: [''],
      starting_date: [''],
      loading_point: ['', [Validators.required]],
      unloading_point: ['', [Validators.required]],
      orientation: ['order'],
      capacity: [''],
      type: [''],
      quantity: ['', [Validators.min(1)]],
      truck_type: [''],
      status: ['ordersPlaced'],
    });
  }

  get customer_id() {
    return this.form.get('customer_id');
  }
  get name() {
    return this.form.get('name');
  }
  get phone() {
    return this.form.get('phone');
  }
  get email() {
    return this.form.get('email');
  }
  get expected_delivery_date() {
    return this.form.get('expected_delivery_date');
  }
  get loading_date() {
    return this.form.get('loading_date');
  }
  get starting_date() {
    return this.form.get('starting_date');
  }
  get loading_point() {
    return this.form.get('loading_point');
  }
  get unloading_point() {
    return this.form.get('unloading_point');
  }
  get capacity() {
    return this.form.get('capacity');
  }
  get quantity() {
    return this.form.get('quantity');
  }
  get type() {
    return this.form.get('type');
  }
  get truck_type() {
    return this.form.get('truck_type');
  }

  private _filterStates(value: string): Customer[] {
    const filterValue = value.toLowerCase();

    return this.customers.filter(
      (state) =>
        state.name.toLowerCase().indexOf(filterValue) === 0 ||
        state.phone.toLowerCase().indexOf(filterValue) === 0
    );
  }
  onSelectCustomer(id) {
    const cus = this.customers.find((item) => item.customer_id === id);
    this.customerControl.patchValue(cus.name);
    this.name.patchValue(cus.name);
    this.phone.patchValue(cus.phone);
    this.email.patchValue(cus.email);
    this.customer_id.patchValue(cus.customer_id);
  }

  addItem() {
    if (this.quantity.value < 0) {
      this.quantity.patchValue('');
      this.commonService.showErrorMsg('Quantity must be positive number');
      return;
    }
    if (this.capacity.value && this.quantity.value && this.type.value) {
      const item = {
        capacity: this.capacity.value,
        quantity: this.quantity.value,
        type: this.type.value,
      };
      // if (!this.truckTypes.find(i => i.itemId === item.itemId)) {
      this.truckTypes = [item, ...this.truckTypes];

      // } else {
      //   this.commonService.showErrorMsg("Item already added!!!!");
      // }
      this.capacity.patchValue('');
      this.quantity.patchValue('');
      this.type.patchValue('');
    } else {
      this.commonService.showErrorMsg('All feilds required!');
    }
  }

  deleteItem(index) {
    this.truckTypes.splice(index, 1);
  }
  onSubmit({ type, quantity, capacity, ...data }: any): void {
    const order = data as Order;

    if (this.form.valid) {
      this.asyncService.start();
      this.commonService.removeEmptyProperties(order);
      order.truck_type = this.truckTypes;
      order.number_of_consignment = this.truckTypes.length.toString();

      this.orderAddSub = this.orderService.addOrder(order).subscribe(
        (isAdded) => {
          if (isAdded) {
            this.commonService.showSuccessMsg(
              'Success! The order has beed created!'
            );
            this.asyncService.finish();
            this.close();
          } else {
            this.asyncService.finish();
            this.commonService.showErrorMsg('Error! The order is not created!');
          }
        },
        (error) => {
          this.asyncService.finish();
          this.commonService.showErrorMsg('Error! The order is not created!');
        }
      );
    }
  }

  close = (): void => {
    this.dialogRef.close();
  };

  ngOnDestroy(): void {
    if (this.orderAddSub) {
      this.orderAddSub.unsubscribe();
    }
    if (this.loadCustomerSub) {
      this.loadCustomerSub.unsubscribe();
    }
    this.asyncService.finish();
  }
}
