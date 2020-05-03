import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentOrdersComponent } from './component-orders/component-orders.component';


const routes: Routes = [{
  path: '', component: ComponentOrdersComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
