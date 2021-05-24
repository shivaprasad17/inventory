import { Component, OnInit } from '@angular/core';
import {ModalsService} from '../../providers/modals.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  students: any[]=[
    {
        "imageUrl":'/assets/item.jpeg',
        "itemName":'Laptop',
        'units':'2',
        'costPerUnit':'42,000',
    },
    {
      "imageUrl":'/assets/item.jpeg',
      "itemName":'Laptop',
      'units':'2',
      'costPerUnit':'42,000',
  }, {
    "imageUrl":'/assets/item.jpeg',
    "itemName":'Laptop',
    'units':'2',
    'costPerUnit':'43,900',
}
  
]
  constructor(public modalsService:ModalsService) { }

  ngOnInit() {}

  openmodal(){
    this.modalsService.openModalItem()
  }

}
