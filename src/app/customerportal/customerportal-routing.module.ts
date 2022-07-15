import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerportalComponent } from './customerportal.component';

const routes: Routes = [
  {
    path:'',
    component:CustomerportalComponent
  },
  {
    path:'login',
    component:CustomerloginComponent
  },
  {
    path:'dashboard',
    component:CustomerdashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerportalRoutingModule { }
