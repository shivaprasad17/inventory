import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from '../app/login/login.component';
import {ComponentsModule} from '../app/components/components.module';
import {AddinventoryComponent} from './addinventory/addinventory.component';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import {environment} from '../environments/environment'
@NgModule({
  declarations: [AppComponent,LoginComponent,AddinventoryComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ComponentsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Camera,File],
  bootstrap: [AppComponent],
})
export class AppModule {}
