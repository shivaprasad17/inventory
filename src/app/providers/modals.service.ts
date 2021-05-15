import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddinventorydetailsComponent} from '../components/addinventorydetails/addinventorydetails.component'
import {AdditemComponent} from '../components/additem/additem.component'



@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor(public modalController:ModalController) { }
  async openModalInventory(){
    const modal = await this.modalController.create({
      component:AddinventorydetailsComponent,
      backdropDismiss: false,
    })
    await modal.present()
   let addedvalues= await modal.onWillDismiss();
   }
   async openModalItem(){
    const modal = await this.modalController.create({
      component:AdditemComponent,
      backdropDismiss: false,
    })
    await modal.present()
   let addedvalues= await modal.onWillDismiss();
   }
}
