import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EmployeeportalRoutingModule } from './employeeportal-routing.module';
import { EmployeeportalComponent } from './employeeportal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { PayrollComponent } from './home/payroll/payroll.component';
import { PayslipComponent } from './home/payslip/payslip.component';
import { LeaverequestComponent } from './home/leaverequest/leaverequest.component';


@NgModule({
  declarations: [
    EmployeeportalComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    PayrollComponent,
    PayslipComponent,
    LeaverequestComponent,
  
  ],
  imports: [
    CommonModule,
    EmployeeportalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EmployeeportalModule { }
