import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../customerportal/authGuard/auth-guard.service';
import { HomeComponent } from '../employeeportal/home/home.component'
import { EmployeeportalComponent } from './employeeportal.component';
import { LeaverequestComponent } from './home/leaverequest/leaverequest.component';
import { PayrollComponent } from './home/payroll/payroll.component';
import { PayslipComponent } from './home/payslip/payslip.component';
import { ProfileComponent } from './home/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeportalComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'payroll',
    component:PayrollComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'payslip',
    component:PayslipComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'leavereq',
    component:LeaverequestComponent,
    canActivate:[AuthGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeportalRoutingModule { }
