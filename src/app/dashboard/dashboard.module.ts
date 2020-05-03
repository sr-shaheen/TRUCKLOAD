import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';
import { CompletedTripComponent } from './completed-trip/completed-trip.component';
import { GrossProfitComponent } from './gross-profit/gross-profit.component';
import { TargetValueComponent } from './target-value/target-value.component';
import { TripComponent } from './trip/trip.component';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, );
@NgModule({
  declarations: [ComponentDashboardComponent, CompletedTripComponent, GrossProfitComponent, TargetValueComponent, TripComponent],
  imports: [
    FusionChartsModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
