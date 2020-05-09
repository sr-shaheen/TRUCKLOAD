import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentCustomerComponent } from './component-customer/component-customer.component';
import { CustomerAddModalComponent } from './customer-add-modal/customer-add-modal.component';


@NgModule({
  declarations: [ComponentCustomerComponent, CustomerAddModalComponent],
  entryComponents:[CustomerAddModalComponent],
  imports: [
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
