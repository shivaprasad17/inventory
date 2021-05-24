import { Component, OnInit } from '@angular/core';
import {ModalsService} from '../../providers/modals.service'
@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss'],
})
export class FoldersComponent implements OnInit {
  students: any[]=[
    {
        "imageUrl":'/assets/item.jpeg',
        "itemName":'Laptop',
        'units':'2',
        'costPerUnit':'42,000',
        'labels':'A1,A2,B3,B2',
        'folders':2,
        'items':40
    },
    {
      "imageUrl":'/assets/item.jpeg',
      "itemName":'Laptop',
      'units':'2',
      'costPerUnit':'42,000',
      'labels':'A1,A2,B3,B2',
      'folders':2,
      'items':40
  }, {
    "imageUrl":'/assets/item.jpeg',
    "itemName":'Laptop',
    'units':'2',
    'costPerUnit':'43,900',
    'labels':'A1,A2,B3,B2',
    'folders':2,
    'items':40
}
  
]
  constructor(private modalsService : ModalsService) { }

  ngOnInit() {}
  openmodal(){
    this.modalsService.openModalFolder()
  }

}
