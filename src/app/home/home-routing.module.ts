import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerportalComponent } from '../customerportal/customerportal.component';
import { EmployeeportalComponent } from '../employeeportal/employeeportal.component';
import { VendorportalComponent } from '../vendorportal/vendorportal.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerportalComponent,
  },
  {
    path:'vendor',
    component:VendorportalComponent
  },
  {
    path:'employee',
    loadChildren: () => import('../employeeportal/employeeportal.module').then(m => m.EmployeeportalModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
