import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';


const routes: Routes = [{
  path: '', component: ComponentDashboardComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }