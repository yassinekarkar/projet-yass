import { Component, OnInit } from '@angular/core';
import {ITabs} from "../../../core";
import {TABS} from "../../../mocks";

@Component({
  selector: 'el-bill-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  tabs = TABS
  constructor() { }
  ngOnInit(): void {
  }

  selectedIndexChange(index){
    console.log(index);
  //  this.tabs[index] = true;
  }

}
