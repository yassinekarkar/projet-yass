import { Component, OnInit, Input } from '@angular/core';
import { IbansService, IIBan } from 'src/core';

@Component({
  selector: 'el-bill-ibans',
  templateUrl: './ibans.component.html',
  styleUrls: ['./ibans.component.less']
})
export class IbansComponent implements OnInit {
  @Input()ibans : IIBan[] =[] ;
  @Input()card : IIBan ;
  @Input() current = 1;
  @Input() total = 100;
  @Input() settings = [];
  @Input() action = "";
  @Input() type = "";


  ibansList : IIBan[]=[] ;

  constructor( private _ibanService:IbansService) { }

  ngOnInit(): void {
    this.getIbans();
  }

  getIbans() {
    this._ibanService.getIbans()  ;
    this._ibanService.getIbansSuccess().subscribe((ibans :any) => {
      this.ibansList = ibans?.results?.data?.rows
    })
  }
}
