import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendordashboardRoutingModule } from './vendordashboard-routing.module';
import { VendordashboardComponent } from './vendordashboard.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ReceiptComponent } from './receipt/receipt.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    VendordashboardRoutingModule
  ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VendordashboardModule { }
