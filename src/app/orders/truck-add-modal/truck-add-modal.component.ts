import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsyncService } from 'src/app/shared/services/async.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { OrderService } from '../services/orders.service';
import { CustomValidators } from 'src/app/shared/helpers/custom.validators';
import { Truck } from '../models/truck.model';

@Component({
  selector: 'app-truck-add-modal',
  templateUrl: './truck-add-modal.component.html',
  styleUrls: ['./truck-add-modal.component.scss'],
})
export class TruckAddModalComponent implements OnInit, OnDestroy {
  formId = 'customerFrom';

  customerServiceSub: Subscription;

  form: FormGroup;

  capacities: any[] = [
    { name: '3 ton', value: 3 },
    { name: '5 ton', value: 5 },
    { name: '7 ton', value: 7 },
  ];
  types: any[] = [
    { name: 'Covered', value: 'covered' },
    { name: 'Open', value: 'open' },
  ];
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      truck_reg: ['', [Validators.required]],
      owner_name: ['', [Validators.required]],
      device_id: [''],
      owner_phn: [
        '',
        [
          Validators.required,
          CustomValidators.numeric,
          Validators.minLength(11),
        ],
      ],
      capacity: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }
  get truck_reg() {
    return this.form.get('truck_reg');
  }
  get owner_name() {
    return this.form.get('owner_name');
  }
  get device_id() {
    return this.form.get('device_id');
  }
  get owner_phn() {
    return this.form.get('owner_phn');
  }
  get capacity() {
    return this.form.get('capacity');
  }
  get type() {
    return this.form.get('type');
  }

  onSubmit(truck: Truck) {
    if (this.form.valid) {
      this.asyncService.start();

      this.customerServiceSub = this.orderService.addTruck(truck).subscribe(
        (isAdded) => {
          this.asyncService.finish();
          if (isAdded) {
            this.commonService.showSuccessMsg(
              'Success! The Truck has been added successfully.'
            );
          } else {
            this.asyncService.finish();
            this.commonService.showErrorMsg('Error! The Truck is not added.');
          }
        },
        (error) => {
          this.asyncService.finish();
          this.commonService.showErrorMsg('Error! The Truck is not added.');
        }
      );
    }
  }
  ngOnDestroy(): void {
    if (this.customerServiceSub) {
      this.customerServiceSub.unsubscribe();
    }
  }
}
