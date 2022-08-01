import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorprofileRoutingModule } from './vendorprofile-routing.module';
import { VendorprofileComponent } from './vendorprofile.component';


@NgModule({
  declarations: [
    VendorprofileComponent
  ],
  imports: [
    CommonModule,
    VendorprofileRoutingModule
  ]
})
export class VendorprofileModule { }
