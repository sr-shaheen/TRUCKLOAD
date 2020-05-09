import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentMapsComponent } from './component-maps/component-maps.component';



const routes: Routes = [{
  path: '', component: ComponentMapsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
