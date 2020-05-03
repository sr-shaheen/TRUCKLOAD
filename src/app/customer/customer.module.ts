import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentCustomerComponent } from './component-customer/component-customer.component';


@NgModule({
  declarations: [ComponentCustomerComponent],
  imports: [
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
