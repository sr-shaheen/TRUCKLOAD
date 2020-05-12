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
  truckFilter = [];
  capacities: any[] = [
    { name: '3 ton', value: '3' },
    { name: '5 ton', value: '5' },
    { name: '7 ton', value: '7' },
  ];
  types: any[] = [
    { name: 'Covered', value: 'covered' },
    { name: 'Open', value: 'open' },
  ];
  truckData: any[] = [
    {
      truck_reg: '12312323',
      vendor_name: 'mofiz',
      vendor_id: '55558',
      device_id: '79879879',
      vendor_phn: '8798797979898',
      capacity: '3',
      type: 'covered',
    },
    {
      truck_reg: '12312323',
      vendor_name: 'mofiz',
      vendor_id: '55558',
      device_id: '79879879',
      vendor_phn: '8798797979898',
      capacity: '5',
      type: 'covered',
    },
    {
      truck_reg: '12312323',
      vendor_name: 'mofiz',
      vendor_id: '55558',
      device_id: '79879879',
      vendor_phn: '8798797979898',
      capacity: '3',
      type: 'open',
    },
    {
      truck_reg: '12312323',
      vendor_name: 'mofiz',
      vendor_id: '55558',
      device_id: '79879879',
      vendor_phn: '8798797979898',
      capacity: '5',
      type: 'open',
    },
    {
      truck_reg: '12312323',
      vendor_name: 'mofiz',
      vendor_id: '55558',
      device_id: '79879879',
      vendor_phn: '8798797979898',
      capacity: '7',
      type: 'open',
    },
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
    });
    this.truckTypes = this.data.truck_type;
  }

  get capacity() {
    return this.form.get('capacity');
  }

  get type() {
    return this.form.get('type');
  }
  get truck_reg() {
    return this.form.get('truck_reg');
  }

  getCapacity(capacity) {
    console.log(capacity, 'lllllllllll');
  }
  getType(type) {
    console.log(type, 'lllllllllll');
    this.truckFilter = this.truckData.filter(
      (item) => item.type === type && item.capacity === this.capacity.value
    );
  }
  addItem() {
    if (this.capacity.value && this.type.value && this.truck_reg.value) {
      const item = {
        capacity: this.capacity.value,
        type: this.type.value,
        truck_reg: this.truck_reg.value,
      };
      if (!this.truckProvide.find((i) => i.truck_reg === item.truck_reg)) {
        this.truckProvide = [item, ...this.truckProvide];
      } else {
        this.commonService.showErrorMsg('Item already added!!!!');
      }
      this.capacity.patchValue('');
      this.type.patchValue('');
      this.truck_reg.patchValue('');
      this.truckFilter = [];
    } else {
      this.commonService.showErrorMsg('All feilds required!');
    }
  }

  deleteItem(index) {
    this.truckTypes.splice(index, 1);
  }

  onSubmit(confirmed) {
    // this.orderConfirmedSub = this.orderService
    //   .updateBoardStatus('id','data')
    //   .subscribe(
    //     (data) => {
    //       if (data) {
    //         this.asyncService.finish();
    //         this.commonService.showSuccessMsg("Board Updated!!!")
    //       } else {
    //         this.asyncService.finish();
    //         this.commonService.showErrorMsg('Error! Not Updated!!');
    //       }
    //     },
    //     (error) => {
    //       this.asyncService.finish();
    //       this.commonService.showErrorMsg('Error! Not Updated!!');
    //     }
    //   );
  }
}
