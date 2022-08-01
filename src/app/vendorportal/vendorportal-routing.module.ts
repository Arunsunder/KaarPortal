import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../customerportal/authGuard/auth-guard.service';
import { OveralldashboardComponent } from './overalldashboard/overalldashboard.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';

const routes: Routes = [
  {
    path:'vendor/login',
    component:VendorloginComponent
  },
  {
    path:'vendor/dashboard',
    component:OveralldashboardComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'vendor/profile',
    component:VendorprofileComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorportalRoutingModule { }
