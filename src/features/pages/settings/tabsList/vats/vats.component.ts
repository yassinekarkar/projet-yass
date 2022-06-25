import {Component, Input, OnInit} from '@angular/core';
import {IVat} from "../../../../../core/interfaces/vat.interface";
import {VatsService} from "../../../../../core/services/vats.service";
@Component({
  selector: 'el-bill-vats',
  templateUrl: './vats.component.html',
  styleUrls: ['./vats.component.less']
})
export class VatsComponent implements OnInit {
  @Input()vats : IVat[] =[] ;
  @Input()card : IVat ;
  @Input() current = 1;
  @Input() total = 100;
  @Input() settings = [];
  @Input() action = "";
  vatsList : IVat[]=[] ;
  constructor( private _vatService:VatsService) { }

  ngOnInit(): void {
    this.getVats();
  }
  getVats() {
    this._vatService.getVats();
    this._vatService.getVatsSuccess().subscribe((vats :any) => {
      this.vatsList = vats?.results?.data?.rows ;
      console.log(this.vatsList);
      
    })
  }
}
