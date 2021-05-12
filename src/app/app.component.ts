import { Component } from '@angular/core';
import {LoginService} from '../app/providers/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'grid' },
    { title: 'Inventories', url: '/folder/inventories', icon: 'business' },
    { title: 'Customers', url: '/folder/customers', icon: 'people' },
    { title: 'Item Group', url: '/folder/itemgroup', icon: 'folder-open'},
    { title: 'Item', url: '/folder/item', icon: 'document' },
    { title: 'Scales Order', url: '/folder/scalesorder', icon: 'cart' },
    { title: 'Purchase Order', url: '/folder/purchaseorder', icon: 'clipboard' },
  ];
  //public islog=localStorage.getItem('isLogin')
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public loginService:LoginService,public router:Router) {
   
   if(localStorage.getItem('isLogin') && localStorage.getItem('isLogin')==='true'){
    this.loginService.isLogin=true
    //this.router.navigate(['/folder/dashboard'])

   }
  }
}
