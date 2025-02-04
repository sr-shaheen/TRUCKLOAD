import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncService } from 'src/app/shared/services/async.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, of } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { CustomerService } from '../services/customer.service';
import { Vendor } from '../models/vendor.model';

@Component({
  selector: 'app-vendor-add-modal',
  templateUrl: './vendor-add-modal.component.html',
  styleUrls: ['./vendor-add-modal.component.scss'],
})
export class VendorAddModalComponent implements OnInit {
  formId = 'vendorFrom';

  vendorServiceSub: Subscription;

  form: FormGroup;

  types: any[] = [
    { name: 'Corporate', value: 'corporate' },
    { name: 'SME', value: 'sme' },
    { name: 'Individual', value: 'Individual' },
  ];
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<VendorAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vendor
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: [''],
      phone: ['', [Validators.required]],
      type: ['', [Validators.required]],
      orientation: ['vendor', [Validators.required]],
    });
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get type() {
    return this.form.get('type');
  }

  onSubmit(vendor: Vendor) {
    if (this.form.valid) {
      this.asyncService.start();
      let observer = of(null);
      if (this.data) {
        observer = this.customerService.updatevendor(
          this.data.vendor_id,
          vendor
        );
      } else {
        observer = this.customerService.addVendor(vendor);
      }

      this.vendorServiceSub = observer.subscribe(
        (isAdded) => {
          this.asyncService.finish();
          if (isAdded) {
            this.commonService.showSuccessMsg(
              'Success! The Truck owner has been added successfully.'
            );
            this.close();
          } else {
            this.asyncService.finish();
            this.commonService.showErrorMsg(
              'Error! The Truck owner is not added.'
            );
          }
        },
        (error) => {
          this.asyncService.finish();
          this.commonService.showErrorMsg(
            'Error! The Truck owner is not added.'
          );
        }
      );
    }
  }

  close = (): void => {
    this.dialogRef.close();
  };

  ngOnDestroy(): void {
    if (this.vendorServiceSub) {
      this.vendorServiceSub.unsubscribe();
    }
  }
}
