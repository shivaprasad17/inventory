import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddinventorydetailsComponent} from './addinventorydetails/addinventorydetails.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {AdditemComponent} from './additem/additem.component'
import {ComponentsPageRoutingModule} from './component-routing.module';
import {AddfolderComponent} from './addfolder/addfolder.component'



@NgModule({
  declarations: [AddinventorydetailsComponent,AddcustomerComponent,AdditemComponent,AddfolderComponent],
  imports: [
    CommonModule,
    ComponentsPageRoutingModule
  ],
  exports:[AddinventorydetailsComponent,AddcustomerComponent,AdditemComponent,AddfolderComponent]
})
export class ComponentsModule { }
