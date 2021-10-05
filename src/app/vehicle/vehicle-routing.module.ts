import { BrandComponent } from './brand/brand.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:':id', pathMatch:'full', component: VehicleComponent},
  {path:'brand', component: BrandComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
