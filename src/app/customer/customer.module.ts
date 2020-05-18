import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentCustomerComponent } from './component-customer/component-customer.component';
import { CustomerAddModalComponent } from './customer-add-modal/customer-add-modal.component';
import { CustomerService } from './services/customer.service';

import { VendorAddModalComponent } from './vendor-add-modal/vendor-add-modal.component';

@NgModule({
  declarations: [ComponentCustomerComponent, CustomerAddModalComponent,  VendorAddModalComponent],
  entryComponents: [CustomerAddModalComponent,VendorAddModalComponent],
  imports: [SharedModule, CustomerRoutingModule],
  providers: [CustomerService],
})
export class CustomerModule {}
