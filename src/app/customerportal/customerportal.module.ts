import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerportalRoutingModule } from './customerportal-routing.module';
import { CustomerportalComponent } from './customerportal.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';


@NgModule({
  declarations: [
    CustomerportalComponent,
    CustomerloginComponent,
    CustomerdashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerportalRoutingModule
  ]
})
export class CustomerportalModule { }
