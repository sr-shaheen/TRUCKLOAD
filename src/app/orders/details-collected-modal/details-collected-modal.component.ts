import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AsyncService } from 'src/app/shared/services/async.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { OrderService } from '../services/orders.service';

import * as moment from 'moment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-details-collected-modal',
  templateUrl: './details-collected-modal.component.html',
  styleUrls: ['./details-collected-modal.component.scss'],
})
export class DetailsCollectedModalComponent implements OnInit, OnDestroy {
  formId = 'detailsCollectedFrom';

  detailsCollectedSub: Subscription;

  form: FormGroup;

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
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<DetailsCollectedModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data, 'ssssssssssss');

    this.form = this.fb.group({
      customer_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      expected_delivery_date: ['', [Validators.required]],
      loading_date: ['', [Validators.required]],
      starting_date: ['', [Validators.required]],
      loading_point: ['', [Validators.required]],
      unloading_point: ['', [Validators.required]],
      capacity: [''],
      type: [''],
      quantity: [''],
      truck_type: [''],
      orientation: ['order'],
      //  status:['detailsCollected']
    });
    this.truckTypes = this.data.truck_type;
    this.form.patchValue(this.data);
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

  addItem() {
    if (this.capacity.value && this.quantity.value && this.type.value) {
      const item = {
        capacity: this.capacity.value,
        quantity: this.quantity.value,
        type: this.type.value,
      };
      // if (!this.truckTypes.find(i => i.itemId === item.itemId)) {
      this.truckTypes = [item, ...this.truckTypes];
      console.log('truckkkkkkkkkkkkkkkkllllllllklllklkk', this.truckTypes);
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
    console.log('dattttaaa', data);

    const order = data as Order;
    order.status = 'detailsCollected';
    order.order_id = this.data.order_id;
    order.pk = this.data.order_id;
    order.sk = this.data.customer_id;
    order.number_of_consignment = this.truckTypes.length.toString();

    console.log('orderrrrrr', order);

    if (this.form.valid) {
      this.asyncService.start();

      order.expected_delivery_date = moment(
        order.expected_delivery_date
      ).format('YYYY-MM-DD');
      order.loading_date = moment(order.loading_date).format('YYYY-MM-DD');
      order.starting_date = moment(order.starting_date).format('YYYY-MM-DD');

      order.truck_type = this.truckTypes;

      this.detailsCollectedSub = this.orderService
        .updateOrderBoard(order)
        .subscribe(
          (isAdded) => {
            if (isAdded) {
              this.commonService.showSuccessMsg(
                'Success! The order has beed created!'
              );
              this.asyncService.finish();
              this.close();
            } else {
              this.asyncService.finish();
              this.commonService.showErrorMsg(
                'Error! The order is not created!'
              );
            }
          },
          (error) => {
            this.asyncService.finish();
            this.commonService.showErrorMsg(
              'Error! The customer information is not added!'
            );
          }
        );
    }
  }

  close = (): void => {
    this.dialogRef.close(true);
  };

  ngOnDestroy(): void {
    if (this.detailsCollectedSub) {
      this.detailsCollectedSub.unsubscribe();
    }
    this.asyncService.finish();
  }
}
