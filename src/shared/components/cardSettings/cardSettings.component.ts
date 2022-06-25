import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IUnity} from "../../../core";

@Component({
  selector: 'el-bill-cardSettings',
  templateUrl: './cardSettings.component.html',
  styleUrls: ['./cardSettings.component.less']
})
export class CardSettingsComponent implements OnInit  {
  @Input() card ;
  @Input() type  = '' ;
  @Input() isVisible = false;
  @Input() isVisibleEdit = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(type): void {
    this.isVisibleEdit = true;
  }

  addCard(): void {
  this.isVisibleEdit = false;
  this.isVisible=true;
}

  isVisibleHandle(e:boolean) {
    this.isVisible=e;
    this.isVisibleEdit = e;
  }


}
