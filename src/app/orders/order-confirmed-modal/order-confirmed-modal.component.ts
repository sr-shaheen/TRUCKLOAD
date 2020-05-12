import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { AsyncService } from 'src/app/shared/services/async.service';
import { OrderService } from '../services/orders.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-confirmed-modal',
  templateUrl: './order-confirmed-modal.component.html',
  styleUrls: ['./order-confirmed-modal.component.scss'],
})
export class OrderConfirmedModalComponent implements OnInit {

  formId = 'detailsCollectedFrom';

  form: FormGroup;
  orderConfirmedSub: Subscription;

  truckTypes = [];
  truckProvide = [];

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
    public dialogRef: MatDialogRef<OrderConfirmedModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data, 'ddddddddddddd');

    this.form = this.fb.group({
      capacity: [''],
      type: [''],
      truck_reg: [''],
      truck_provide: [''],
    });
    this.truckTypes=this.data.truck_type;
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
  get truck_reg() {
    return this.form.get('truck_reg');
  }
  get truck_provide() {
    return this.form.get('truck_provide');
  }

  addItem() {
    if (this.capacity.value && this.quantity.value && this.type.value&&this.truck_reg.value) {
      const item = {
        capacity: this.capacity.value,
        quantity: this.quantity.value,
        type: this.type.value,
        truck_reg: this.truck_reg.value,
      };
      // if (!this.truckTypes.find(i => i.itemId === item.itemId)) {
      this.truckProvide = [item, ...this.truckProvide];
      // } else {
      //   this.commonService.showErrorMsg("Item already added!!!!");
      // }
      this.capacity.patchValue('');
      this.quantity.patchValue('');
      this.type.patchValue('');
      this.truck_reg.patchValue('');
    } else {
      this.commonService.showErrorMsg('All feilds required!');
    }
  }

  deleteItem(index) {
    this.truckTypes.splice(index, 1);
  }

  onSubmit(confirmed){


  }
}
