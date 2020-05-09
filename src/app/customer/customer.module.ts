import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentCustomerComponent } from './component-customer/component-customer.component';
import { CustomerAddModalComponent } from './customer-add-modal/customer-add-modal.component';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [ComponentCustomerComponent, CustomerAddModalComponent],
  entryComponents: [CustomerAddModalComponent],
  imports: [SharedModule, CustomerRoutingModule],
  providers: [CustomerService],
})
export class CustomerModule {}
