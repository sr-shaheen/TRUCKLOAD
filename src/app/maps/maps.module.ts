import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MapsRoutingModule } from './maps-routing.module';
import { ComponentMapsComponent } from './component-maps/component-maps.component';



@NgModule({
  declarations: [ComponentMapsComponent],
  imports: [
    SharedModule,
    MapsRoutingModule
    
    
  ]
})
export class MapsModule { }
