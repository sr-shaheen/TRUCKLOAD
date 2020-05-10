import { Component, OnInit } from '@angular/core';
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
import { map, startWith } from 'rxjs/operators';

export interface Customer {
  customer_id: string;
  customer_name: string;
  customer_phn: string;
  image_path: string;
}
@Component({
  selector: 'app-order-add-modal',
  templateUrl: './order-add-modal.component.html',
  styleUrls: ['./order-add-modal.component.scss'],
})
export class OrderAddModalComponent implements OnInit {
  formId = 'orderFrom';

  orderSub: Subscription;

  form: FormGroup;

  customerId = new FormControl();
  filteredStates: Observable<Customer[]>;

  customers: Customer[] = [
    {
      customer_id: '1',
      customer_name: 'Arkansas',
      customer_phn: '0198888888888',
      image_path:
        'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      customer_id: '2',
      customer_name: 'California',
      customer_phn: '0178888888888',
      image_path:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      customer_id: '3',
      customer_name: 'Florida',
      customer_phn: '0168888888888',
      image_path:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      customer_id: '4',
      customer_name: 'Texas',
      customer_phn: '0158888888888',
      image_path:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.filteredStates = this.customerId.valueChanges.pipe(
      startWith(''),
      map((state) =>
        state ? this._filterStates(state) : this.customers.slice()
      )
    );
    this.form = this.fb.group({
      customer_name: ['', [Validators.required]],
      customer_email: ['', [Validators.required, Validators.email]],
      customer_phn: ['', [Validators.required]],
      customer_type: ['', [Validators.required]],
    });
  }
  private _filterStates(value: string): Customer[] {
    const filterValue = value.toLowerCase();

    return this.customers.filter(
      (state) =>
        state.customer_name.toLowerCase().indexOf(filterValue) === 0 ||
        state.customer_phn.toLowerCase().indexOf(filterValue) === 0
    );
  }
  onSelectCustomer(id) {
    const cus = this.customers.find((item) => item.customer_id === id);
    this.customerId.patchValue(cus.customer_name);
  }

  onSubmit(order) {}
}
