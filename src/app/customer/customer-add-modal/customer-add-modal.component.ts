import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncService } from 'src/app/shared/services/async.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, of } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-add-modal',
  templateUrl: './customer-add-modal.component.html',
  styleUrls: ['./customer-add-modal.component.scss'],
})
export class CustomerAddModalComponent implements OnInit {
  formId = 'customerFrom';

  customerServiceSub: Subscription;

  form: FormGroup;

  defaultImage = "/assets/images/avatar_square_blue.png";
  userPicture: string;
  userAvatar: string = this.defaultImage;

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
      customer_name: ['', [Validators.required]],
      customer_email: ['', [Validators.required, Validators.email]],
      customer_phn: ['', [Validators.required]],
      customer_type: ['', [Validators.required]],
      orientation: ['customer', [Validators.required]],
      pictureName: [''],
    });
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  get customer_name() {
    return this.form.get('customer_name');
  }
  get customer_email() {
    return this.form.get('customer_email');
  }
  get customer_phn() {
    return this.form.get('customer_phn');
  }
  get customer_type() {
    return this.form.get('customer_type');
  }

  onChangeUserPicture({ target }: Event): void {
    try {
      const files = (<HTMLInputElement>target).files;
      if (files && files.length > 0) {
        const file = files[0];
        this.form.patchValue({ pictureName: file.name });
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
          this.userPicture = (<string>event.target["result"]).split(",")[1];
          this.userAvatar = <string>event.target["result"];
        };
      } else {
        this.form.patchValue({ pictureName: "" });
        this.userPicture = this.defaultImage;
      }
    } catch (error) {}
  }
  onSubmit(customer: Customer) {
    if (this.form.valid) {
      this.asyncService.start();
      let observer = of(null);
      if (this.data) {
        observer = this.customerService.updateCustomer(
          this.data.customer_id,
          customer
        );
      } else {
        observer = this.customerService.addCustomer(customer);
      }

      this.customerServiceSub = observer.subscribe(
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
    if (this.customerServiceSub) {
      this.customerServiceSub.unsubscribe();
    }
  }
}
