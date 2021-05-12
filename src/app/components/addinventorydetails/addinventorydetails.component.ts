import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addinventorydetails',
  templateUrl: './addinventorydetails.component.html',
  styleUrls: ['./addinventorydetails.component.scss'],
})
export class AddinventorydetailsComponent implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss()
  }

}
