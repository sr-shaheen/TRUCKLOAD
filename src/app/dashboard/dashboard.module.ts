import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';


@NgModule({
  declarations: [ComponentDashboardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
