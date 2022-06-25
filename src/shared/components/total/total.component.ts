import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'el-bill-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.less']
})
export class TotalComponent implements OnInit {
  @Input()total=0 ;
  constructor() { }

  ngOnInit(): void {
  }

}
