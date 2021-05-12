import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddinventorydetailsComponent} from '../components/addinventorydetails/addinventorydetails.component'



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
}
