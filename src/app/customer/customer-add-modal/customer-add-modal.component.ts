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
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      type: ['', [Validators.required]],
      orientation: ['customer', [Validators.required]],
      pictureName: [''],
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
            this.close();
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

  close = (): void => {
    this.dialogRef.close();
  };
  ngOnDestroy(): void {
    if (this.customerServiceSub) {
      this.customerServiceSub.unsubscribe();
    }
  }
}
