import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OveralldashboardComponent } from '../overalldashboard/overalldashboard.component';

const routes: Routes = [
  {
    path: 'quotation',
    component: OveralldashboardComponent
  },
  {
    path: 'purchaseorder',
    component:OveralldashboardComponent
  },
  {
    path: 'receipt',
    component: OveralldashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendordashboardRoutingModule { }
