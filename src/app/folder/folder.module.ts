import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InventoriesComponent} from './inventories/inventories.component';
import {CustomersComponent} from './customers/customers.component';
import {ItemsComponent} from './items/items.component'
import {ComponentsModule} from '../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FolderPage,DashboardComponent,InventoriesComponent,CustomersComponent,ItemsComponent]
})
export class FolderPageModule {}
