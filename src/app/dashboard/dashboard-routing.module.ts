import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component'

const routes: Routes = [{
 
 // path: '', component: ComponentDashboardComponent,
  path: '', component:  AdminDashboardComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }