import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddinventorydetailsComponent } from './addinventorydetails/addinventorydetails.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component'

const routes: Routes = [
  {
    path: 'addinventory',
    component: AddinventorydetailsComponent
  },
  {
    path: 'addcustomer',
    component: AddcustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsPageRoutingModule {}
