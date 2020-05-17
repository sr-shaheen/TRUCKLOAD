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
import { Truck } from '../models/truck.model';
import { startWith, map } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
export interface Vendor {
  vendor_id: string;
  name: string;
  phone: string;
  image_path: string;
}

@Component({
  selector: 'app-truck-add-modal',
  templateUrl: './truck-add-modal.component.html',
  styleUrls: ['./truck-add-modal.component.scss'],
})
export class TruckAddModalComponent implements OnInit, OnDestroy {
  formId = 'customerFrom';

  customerServiceSub: Subscription;
  loadVendorSub: Subscription;

  form: FormGroup;

  vendorControl = new FormControl();
  filteredStates: Observable<Vendor[]>;

  vendors: Vendor[] = [];
  // vendors: Vendor[] = [
  //   {
  //     vendor_id: '1',
  //     name: 'Arkansas',
  //     phone: '0198888888888',
  //     image_path:
  //       'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
  //   },
  //   {
  //     vendor_id: '2',
  //     name: 'California',
  //     phone: '0178888888888',
  //     image_path:
  //       'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
  //   },
  //   {
  //     vendor_id: '3',
  //     name: 'Florida',
  //     phone: '0168888888888',
  //     image_path:
  //       'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
  //   },
  //   {
  //     vendor_id: '4',
  //     name: 'Texas',
  //     phone: '0158888888888',
  //     image_path:
  //       'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
  //   },
  //   {
  //     vendor_id: 'vendor_trcl_01673092106',
  //     name: 'Truckload Companies Ltd',
  //     phone: '0158888888888',
  //     image_path:
  //       'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
  //   },
  // ];
  capacities: any[] = [
    { name: '3 ton', value: '3' },
    { name: '5 ton', value: '5' },
    { name: '7 ton', value: '7' },
  ];
  types: any[] = [
    { name: 'Covered', value: 'covered' },
    { name: 'Open', value: 'open' },
  ];
  statuses: any[];
  statusTruckOwner: any[] = [
    { name: 'Not available', value: 'not available' },
    { name: 'Available', value: 'available' },
  ];
  statusOtherVendor: any[] = [
    { name: 'returned', value: 'returned' },
    { name: 'rented', value: 'rented' },
  ];
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<TruckAddModalComponent>
  ) {}

  ngOnInit(): void {
    this.loadVendorSub = this.orderService.getVendor().subscribe(
      (data) => {
        if (data) {
          this.vendors = data;
          console.log(this.vendors);
        } else {
          this.asyncService.finish();
          this.commonService.showErrorMsg('Error! Vendors could not found');
        }
      },
      (error) => {
        this.asyncService.finish();
        this.commonService.showErrorMsg('Error! Vendors could not found');
      }
    );

    this.filteredStates = this.vendorControl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this._filterStates(state) : this.vendors.slice()))
    );
    this.form = this.fb.group({
      truck_reg: ['', [Validators.required]],
      vendor_name: ['', [Validators.required]],
      vendor_id: ['', [Validators.required]],
      device_id: [''],
      phone: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
      type: ['', [Validators.required]],
      status: ['', [Validators.required]],
      orientation:[''],

    });
  }
  private _filterStates(value: string): Vendor[] {
    const filterValue = value.toLowerCase();

    return this.vendors.filter(
      (state) =>
        state.name.toLowerCase().indexOf(filterValue) === 0 ||
        state.phone.toLowerCase().indexOf(filterValue) === 0
    );
  }
  onSelectvendor(id) {
    const cus = this.vendors.find((item) => item.vendor_id === id);
    this.vendorControl.patchValue(cus.name);
    this.vendor_name.patchValue(cus.name);
    this.vendor_id.patchValue(cus.vendor_id);
    this.phone.patchValue(cus.phone);
    if (cus.vendor_id === '1234567890_trbl_vendor') {
      this.statuses = this.statusTruckOwner;
      this.orientation.patchValue('own');
    } else {
      this.statuses = this.statusOtherVendor;
      this.orientation.patchValue('other');
    }
  }
  get truck_reg() {
    return this.form.get('truck_reg');
  }
  get vendor_name() {
    return this.form.get('vendor_name');
  }
  get vendor_id() {
    return this.form.get('vendor_id');
  }
  get device_id() {
    return this.form.get('device_id');
  }
  get phone() {
    return this.form.get('phone');
  }
  get status() {
    return this.form.get('status');
  }
  get capacity() {
    return this.form.get('capacity');
  }
  get type() {
    return this.form.get('type');
  }
  get orientation() {
    return this.form.get('orientation');
  }

  onSubmit(truck: Truck) {
    if (this.form.valid) {
      this.asyncService.start();
      this.commonService.removeEmptyProperties(truck);
      this.customerServiceSub = this.orderService.addTruck(truck).subscribe(
        (isAdded) => {
          this.asyncService.finish();
          if (isAdded) {
            this.commonService.showSuccessMsg(
              'Success! The Truck has been added successfully.'
            );
            this.close();
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

  close = (): void => {
    this.dialogRef.close();
  };
  ngOnDestroy(): void {
    if (this.customerServiceSub) {
      this.customerServiceSub.unsubscribe();
    }
    if (this.loadVendorSub) {
      this.loadVendorSub.unsubscribe();
    }
    this.asyncService.finish();
  }
}
