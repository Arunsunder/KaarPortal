import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AuthGuardService } from './authGuard/auth-guard.service';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerportalComponent } from './customerportal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  
  {
    path:'customer/login',
    component:CustomerloginComponent
  },
  {
    path:'customer/dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'customer/profile',
    component:ProfileComponent,
    canActivate:[AuthGuardService]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerportalRoutingModule { }
