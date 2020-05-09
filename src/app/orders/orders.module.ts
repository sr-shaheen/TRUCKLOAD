import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersBoardItemComponent } from './components/orders-board-item.component';
import { OrdersBoardComponent } from './orders-board/orders-board.component';
import { CustomerAddModalComponent } from '../customer/customer-add-modal/customer-add-modal.component';

@NgModule({
  declarations: [OrdersBoardComponent, OrdersBoardItemComponent],
  entryComponents:[CustomerAddModalComponent],
  imports: [SharedModule, OrdersRoutingModule],
})
export class OrdersModule {}
