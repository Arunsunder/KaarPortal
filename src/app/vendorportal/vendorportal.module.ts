import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorportalRoutingModule } from './vendorportal-routing.module';
import { VendorportalComponent } from './vendorportal.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorfinancialComponent } from './vendorfinancial/vendorfinancial.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { OveralldashboardComponent } from './overalldashboard/overalldashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table'  
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditDebitComponent } from './vendorfinancial/credit-debit/credit-debit.component';
import { InvoiceComponent } from './vendorfinancial/invoice/invoice.component';
import { PaymentsandagingComponent } from './vendorfinancial/paymentsandaging/paymentsandaging.component';
import { PurchaseorderComponent } from './vendordashboard/purchaseorder/purchaseorder.component';
import { QuotationComponent } from './vendordashboard/quotation/quotation.component';
import { ReceiptComponent } from './vendordashboard/receipt/receipt.component';



@NgModule({
  declarations: [
    VendorportalComponent,
    VendorloginComponent,
    VendordashboardComponent,
    VendorfinancialComponent,
    OveralldashboardComponent,
    CreditDebitComponent,
    InvoiceComponent,
    PaymentsandagingComponent,
    PurchaseorderComponent,
    QuotationComponent,
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    VendorportalRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VendorportalModule { }
