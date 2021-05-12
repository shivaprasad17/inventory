import { Component, OnInit } from '@angular/core';
import {ModalsService} from '../../providers/modals.service';





@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss'],
})
export class InventoriesComponent implements OnInit {

  constructor(public modalsService:ModalsService) { }

  ngOnInit() {}


   openmodal(){
    this.modalsService.openModalInventory()
  }

}
