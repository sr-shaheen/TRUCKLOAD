import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersBoardComponent } from './orders-board/orders-board.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
