import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersBoardItemComponent } from './components/orders-board-item.component';
import { OrdersBoardComponent } from './orders-board/orders-board.component';
import { CustomerAddModalComponent } from '../customer/customer-add-modal/customer-add-modal.component';
import { TruckAddModalComponent } from './truck-add-modal/truck-add-modal.component';
import { OrderAddModalComponent } from './order-add-modal/order-add-modal.component';
import { CustomerService } from '../customer/services/customer.service';
import { OrderService } from './services/orders.service';
import { DetailsCollectedModalComponent } from './details-collected-modal/details-collected-modal.component';
import { OrderConfirmedModalComponent } from './order-confirmed-modal/order-confirmed-modal.component';
import { VendorAddModalComponent } from '../customer/vendor-add-modal/vendor-add-modal.component';

@NgModule({
  declarations: [
    OrdersBoardComponent,
    OrdersBoardItemComponent,
    TruckAddModalComponent,
    OrderAddModalComponent,
    DetailsCollectedModalComponent,
    OrderConfirmedModalComponent,
  ],
  entryComponents: [
    CustomerAddModalComponent,
    VendorAddModalComponent,
    TruckAddModalComponent,
    OrderAddModalComponent,
    DetailsCollectedModalComponent,
    OrderConfirmedModalComponent
  ],
  imports: [SharedModule, OrdersRoutingModule],
  providers: [CustomerService,OrderService],
})
export class OrdersModule {}
