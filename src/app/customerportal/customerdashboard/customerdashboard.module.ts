import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerdashboardRoutingModule } from './customerdashboard-routing.module';
import { DeliverylistComponent } from './deliverylist/deliverylist.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { SaleorderComponent } from './saleorder/saleorder.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CustomerdashboardRoutingModule,
  ]
})
export class CustomerdashboardModule { }
