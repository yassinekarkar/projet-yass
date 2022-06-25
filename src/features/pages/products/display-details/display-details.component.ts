import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.less']
})

export class DisplayDetailsComponent implements OnInit {

  constructor() { }

  @Input() productDetails: Object;
  productTitle: string;
  ngOnInit(): void {
    this.productTitle = this.productDetails['name'];
  }
}
