import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DeliverylistComponent } from './deliverylist/deliverylist.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { SaleorderComponent } from './saleorder/saleorder.component';

const routes: Routes = [

  {
    path: 'inquiry',
    component: DashboardComponent
  },
  {
    path: 'salesorder',
    component: DashboardComponent
  },
  {
    path: 'deliverylist',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerdashboardRoutingModule { }
