import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddinventorydetailsComponent} from './addinventorydetails/addinventorydetails.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {AdditemComponent} from './additem/additem.component'
import {ComponentsPageRoutingModule} from './component-routing.module'



@NgModule({
  declarations: [AddinventorydetailsComponent,AddcustomerComponent,AdditemComponent],
  imports: [
    CommonModule,
    ComponentsPageRoutingModule
  ],
  exports:[AddinventorydetailsComponent,AddcustomerComponent,AdditemComponent]
})
export class ComponentsModule { }
