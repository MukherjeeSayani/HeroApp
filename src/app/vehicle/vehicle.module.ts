import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { BrandComponent } from './brand/brand.component';
import { VehicleComponent } from './vehicle/vehicle.component';


@NgModule({
  declarations: [
    BrandComponent,
    VehicleComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
