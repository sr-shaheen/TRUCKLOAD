import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentCustomerComponent } from './component-customer/component-customer.component';
import { CustomerAddModalComponent } from './customer-add-modal/customer-add-modal.component';
import { CustomerService } from './services/customer.service';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [ComponentCustomerComponent, CustomerAddModalComponent, CustomerListComponent],
  entryComponents: [CustomerAddModalComponent],
  imports: [SharedModule, CustomerRoutingModule],
  providers: [CustomerService],
})
export class CustomerModule {}
