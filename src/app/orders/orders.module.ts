import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersBoardItemComponent } from './components/orders-board-item.component';
import { OrdersBoardComponent } from './orders-board/orders-board.component';
import { CustomerAddModalComponent } from '../customer/customer-add-modal/customer-add-modal.component';
import { TruckAddModalComponent } from './truck-add-modal/truck-add-modal.component';
import { OrderAddModalComponent } from './order-add-modal/order-add-modal.component';

@NgModule({
  declarations: [
    OrdersBoardComponent,
    OrdersBoardItemComponent,
    TruckAddModalComponent,
    OrderAddModalComponent,
  ],
  entryComponents: [
    CustomerAddModalComponent,
    TruckAddModalComponent,
    OrderAddModalComponent,
  ],
  imports: [SharedModule, OrdersRoutingModule],
})
export class OrdersModule {}
