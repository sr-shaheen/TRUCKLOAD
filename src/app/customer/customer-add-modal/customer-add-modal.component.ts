import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncService } from 'src/app/shared/services/async.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-add-modal',
  templateUrl: './customer-add-modal.component.html',
  styleUrls: ['./customer-add-modal.component.scss'],
})
export class CustomerAddModalComponent implements OnInit {
  formId = 'customerFrom';

  customerServiceSub: Subscription;

  form: FormGroup;

  types: any[] = [
    {name: 'Corporate', value: 'corporate'},
    {name: 'NonCorporate', value: 'Nonorporate'},
    {name: 'Sample', value: 'Sample'},
    {name: 'Truck owner', value: 'truckOwner'},
  ];
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<CustomerAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      customer_name: ['', [Validators.required]],
      customer_email: ['', [Validators.required,Validators.email]],
      customer_phn: ['', [Validators.required]],
      customer_type: ['', [Validators.required]],
    });
  }

  get customer_name() {
    return this.form.get("customer_name");
  }
  get customer_email() {
    return this.form.get("customer_email");
  }
  get customer_phn() {
    return this.form.get("customer_phn");
  }
  get customer_type() {
    return this.form.get("customer_type");
  }

  onSubmit(customer) {
    console.log(customer, 'daaaaaaaataaaa');
    if (this.form.valid) {
      this.asyncService.start();
      this.customerServiceSub = this.customerService
        .addCustomer(customer)
        .subscribe(
          isAdded => {
            this.asyncService.finish();
            if (isAdded) {
              this.commonService.showSuccessMsg(
                'Success! The complaint has been added successfully.'
              );
            } else {
              this.asyncService.finish();
              this.commonService.showErrorMsg(
                'Error! The complaint is not added.'
              );
            }
          },
          error => {
            this.asyncService.finish();
            this.commonService.showErrorMsg(
              'Error! The complaint is not added.'
            );
          }
        );
    }
  }
}
