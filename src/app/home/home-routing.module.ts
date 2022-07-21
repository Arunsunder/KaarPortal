import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerportalComponent } from '../customerportal/customerportal.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerportalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
