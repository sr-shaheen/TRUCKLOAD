import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ComponentDashboardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
