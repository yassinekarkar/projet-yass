import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ICompany, ITable} from "../../../core";
import { Router } from '@angular/router';
import { Product } from 'src/features/pages/products/products.model';

@Component({
  selector: 'el-bill-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  @Input() listOfData!: ITable ;
  @Input() current = 1;
  @Input() total = 20;
  @Input() pageSize = 5;
  @Input() dataFrom = '';
  
  target : any ;
  
  totalFac=0 ;
  display_details: boolean = true;

  
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.target = {vat: 0,unity: 0, prix_ttc: 0, code: 'Guest', name: 'Guest', prix_ht: 0, description: 'Guest'};
    console.log(this.listOfData);
    if(this.route.url != '/products') {
      let editModal = document.querySelector('#editModal');
      editModal.id = "invalid1";
      let displayModal = document.querySelector('#displayModal');
      displayModal.id ="invalid2";
    };
  }
  
  test(event) {
    let element = event.target as HTMLElement;
    let id = element.id.slice(14);
    let productList = this.listOfData.data[id];
    this.target = productList;
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
  }

  onImgError(event){
    event.target.src = './assets/images/smarteo.png'
  }


  onPageIndexChange(pageIndex: number) {
    this.current = pageIndex;
  }

}
  