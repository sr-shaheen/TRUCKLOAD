import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { AsyncService } from 'src/app/shared/services/async.service';
import { OrderService } from '../services/orders.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription, forkJoin } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TruckList } from '../models/truck.model';
import { OrdersBoardItem } from '../models/orders-board-item.model';

@Component({
  selector: 'app-order-confirmed-modal',
  templateUrl: './order-confirmed-modal.component.html',
  styleUrls: ['./order-confirmed-modal.component.scss'],
})
export class OrderConfirmedModalComponent implements OnInit {
  formId = 'detailsCollectedFrom';

  form: FormGroup;
  orderConfirmedSub: Subscription;
  orderLeaseSub: Subscription;

  submitFlag: boolean;
  requiredTruckCount = 0;
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
  truckData: TruckList[] = [];

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<OrderConfirmedModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrdersBoardItem
  ) {}

  ngOnInit(): void {
    let ownTruck = this.orderService.ownTruck();
    let otherTruck = this.orderService.otherTruck();
    forkJoin([ownTruck, otherTruck]).subscribe((results) => {
      this.truckData = [...results[0], ...results[1]];
    });

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
    this.type.patchValue('');
  }
  getType(type) {
    this.truckFilter = this.truckData.filter(
      (item) => item.type === type && item.capacity === this.capacity.value
    );
  }
  addItem() {
    if (this.capacity.value && this.type.value && this.truck_reg.value) {
      const itemData = this.truckData.find(
        (item) => item.truck_reg === this.truck_reg.value
      );
      const item = {
        capacity: this.capacity.value,
        type: this.type.value,
        truck_reg: this.truck_reg.value,
        truck_id: itemData.truck_id,
        device_id: itemData.device_id ? itemData.device_id : undefined,
        orientation: itemData.orientation,
        vendor_name: itemData.vendor_name,
        vendor_id: itemData.vendor_id,
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
    this.truckProvide.splice(index, 1);
  }

  onSubmit(confirmed) {
    // validation logic
    this.submitFlag = true;
    this.truckTypes.forEach((item) => {
      const data = this.truckProvide.filter(
        (i) => i.capacity === item.capacity && i.type === item.type
      );

      if (data.length !== parseInt(item.quantity)) {
        this.submitFlag = false;
        this.commonService.showErrorMsg('Check properly !!!');
      }
    });
    // end validation logic

    if (this.submitFlag) {
      let mapData = this.truckProvide.map((item) => ({
        pk: item.truck_id,
        sk: item.vendor_id,
        status: item.orientation === 'own' ? 'notAvailable' : 'rented',
      }));

      const leaseObj = {
        order_id: this.data.order_id,
        orientation: 'lease',
        information: mapData,
      };
      console.log(leaseObj, 'Leaseeeeeeeeee');

      this.orderLeaseSub = this.orderService.addlease(leaseObj).subscribe(
        (data) => {
          if (data) {
            mapData.push({
              pk: this.data.order_id,
              sk: this.data.customer_id,
              status: 'orderConfirmed',
            });
            console.log(mapData, 'Updateeeeeeee');

            this.orderConfirmedSub = this.orderService
              .updateConfirmed(mapData)
              .subscribe(
                (data) => {
                  if (data) {
                    this.asyncService.finish();
                    this.commonService.showSuccessMsg('Board Updated!!!');
                  } else {
                    this.asyncService.finish();
                    this.commonService.showErrorMsg('Error! Not Updated!!');
                  }
                },
                (error) => {
                  this.asyncService.finish();
                  this.commonService.showErrorMsg('Error! Not Updated!!');
                }
              );
          } else {
            this.asyncService.finish();
            this.commonService.showErrorMsg('Error! Lease not created!!');
          }
        },
        (error) => {
          this.asyncService.finish();
          this.commonService.showErrorMsg('Error! Lease not created!!');
        }
      );
    }
  }

  close = (): void => {
    this.dialogRef.close();
  };

  ngOnDestroy(): void {
    if (this.orderLeaseSub) {
      this.orderLeaseSub.unsubscribe();
    }
    if (this.orderConfirmedSub) {
      this.orderConfirmedSub.unsubscribe();
    }
    this.asyncService.finish();
  }
}
