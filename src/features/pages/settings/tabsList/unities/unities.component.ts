import {Component, Input, OnInit} from '@angular/core';
import {IUnity, UnitiesService} from "../../../../../core";

@Component({
  selector: 'el-bill-unities',
  templateUrl: './unities.component.html',
  styleUrls: ['./unities.component.less']
})
export class UnitiesComponent implements OnInit {
  @Input()unities : IUnity[] =[] ;
  @Input()card : IUnity ;
  @Input() current = 1;
  @Input() total = 100;
  @Input() settings = [];
  @Input() action = "";
  @Input() type = "";

  uitiesList : IUnity[]=[] ;

  constructor( private _unityService:UnitiesService) { }

  ngOnInit(): void {
    this.getUnities();
  }

  getUnities() {
    this._unityService.getUnities()  ;
    this._unityService.getUnitiesSuccess().subscribe((unities :any) => {
      this.uitiesList = unities?.results?.data?.rows
    })
  }
}
