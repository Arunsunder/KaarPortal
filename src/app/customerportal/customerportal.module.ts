import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CustomerportalRoutingModule } from './customerportal-routing.module';
import { CustomerportalComponent } from './customerportal.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerfinancialComponent } from './customerfinancial/customerfinancial.component';
import { InquiryComponent } from './customerdashboard/inquiry/inquiry.component';
import { SaleorderComponent } from './customerdashboard/saleorder/saleorder.component';
import { DeliverylistComponent } from './customerdashboard/deliverylist/deliverylist.component';
import { InvoiceComponent } from './customerfinancial/invoice/invoice.component';
import { PaymentsComponent } from './customerfinancial/payments/payments.component';
import { MemoComponent } from './customerfinancial/memo/memo.component';
import { OverallsalesComponent } from './customerfinancial/overallsales/overallsales.component';
import { CustomerdashboardRoutingModule } from './customerdashboard/customerdashboard-routing.module';
import { CustomerdashboardModule } from './customerdashboard/customerdashboard.module';


@NgModule({
  declarations: [
    CustomerportalComponent,
    CustomerloginComponent,
    DashboardComponent,
    CustomerdashboardComponent,
    CustomerfinancialComponent,
    InquiryComponent,
    SaleorderComponent,
    DeliverylistComponent,
    InvoiceComponent,
    PaymentsComponent,
    MemoComponent,
    OverallsalesComponent,
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // HomeRoutingModule,
    CustomerportalRoutingModule,
    CustomerdashboardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomerportalModule { }
