import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncService } from 'src/app/shared/services/async.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, of } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { CustomerService } from '../services/customer.service';
import { Vendor } from '../models/vendor.model';
import {Customer} from '../models/customer.model';

@Component({
  selector: 'app-customer-add-modal',
  templateUrl: './customer-add-modal.component.html',
  styleUrls: ['./customer-add-modal.component.scss'],
})
export class CustomerAddModalComponent implements OnInit {
  formId = 'customerFrom';

  profileServiceSub: Subscription;

  form: FormGroup;

  orientations: any[] = [
    { name: 'Customer', value: 'customer' },
    { name: 'Vendor', value: 'vendor' },

  ];

  types: any[] = [
    { name: 'Corporate', value: 'corporate' },
    { name: 'SME', value: 'SME' },
    { name: 'Individual', value: 'Individual' },
  
  ];
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<CustomerAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [ Validators.email]],
      phn: ['', [Validators.required]],
      orientation: ['', [Validators.required]],
      type: ['', [Validators.required]],
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
  get phn() {
    return this.form.get('phn');
  }

  get orientation() {
    return this.form.get('orientation');
  }
  get type() {
    return this.form.get('type');
  }

  onSubmit(data:any) {
    console.log(data,'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    
    if (this.form.valid) {
      this.asyncService.start();
      let observer = of(null);
      // if (this.data) {
      //   observer = this.customerService.updateCustomer(
      //     this.data.customer_id,
      //    data
      //   );
      // } else {
      //   observer = this.customerService.addCustomer(customer);
      // }
      if(data.orientation==="customer" )
      {
        console.log('aschiiiii',data.type);
        
        if(!this.email.value)
        {
          this.asyncService.finish();
          this.commonService.showErrorMsg(
            'Error!Customer email required !'
          );
          return;
        }
        // const postData = { item: data };
       
        let customerData={
          customer_name: data.name,
          customer_email: data.email,
          customer_phn: data.phn,
          customer_type: data.type,
          orientation:data.orientation
        }
        observer = this.customerService.addCustomer(customerData);
      }
      else {
        let vendorData={
          vendor_name: data.name,
          vendor_email: data.email,
          vendor_phn: data.phn,
          vendor_type: data.type,
          orientation:data.orientation
        }
        observer = this.customerService.addVendor(vendorData);
      }
   
      this.profileServiceSub = observer.subscribe(
        (isAdded) => {
          this.asyncService.finish();
          if (isAdded) {
            this.commonService.showSuccessMsg(
              'Success! The Customer has been added successfully.'
            );
          } else {
            this.asyncService.finish();
            this.commonService.showErrorMsg(
              'Error! The Customer is not added.'
            );
          }
        },
        (error) => {
          this.asyncService.finish();
          this.commonService.showErrorMsg('Error! The Customer is not added.');
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.profileServiceSub) {
      this.profileServiceSub.unsubscribe();
    }
  }
}
