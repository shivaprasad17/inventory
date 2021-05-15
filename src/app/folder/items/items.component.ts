import { Component, OnInit } from '@angular/core';
import {ModalsService} from '../../providers/modals.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  constructor(public modalsService:ModalsService) { }

  ngOnInit() {}

  openmodal(){
    this.modalsService.openModalItem()
  }

}
