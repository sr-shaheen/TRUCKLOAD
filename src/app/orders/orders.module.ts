import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { ComponentOrdersComponent } from './component-orders/component-orders.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ComponentOrdersComponent],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
