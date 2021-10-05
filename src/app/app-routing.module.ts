import { DataresolveResolver } from './dataresolve.resolver';
import { YellowGuardGuard } from './guards/yellow-guard.guard';
import { NewColorComponent } from './new-color/new-color.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { CarColorComponent } from './car-color/car-color.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/colors' },
  {
    path: 'colors', component: ColorsComponent, children: [
      { path: 'new', component: NewColorComponent,  pathMatch:'full', resolve: [DataresolveResolver] },
      { path: ':hexValue', component: CarColorComponent,  pathMatch:'full', canActivate:[YellowGuardGuard] }
    ]
  },
  { path: 'vehicle', loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule), canLoad:[YellowGuardGuard] }
];
/** /vehicle/brand -> /colors/new */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
