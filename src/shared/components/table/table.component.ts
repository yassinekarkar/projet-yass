import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICompany, ITable } from "../../../core";
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/features/pages/products/products.model';
@Component({
  selector: 'el-bill-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  @Input() listOfData!: ITable;
  @Input() current = 1;
  @Input() total = 20;
  @Input() pageSize = 5;
  @Input() dataFrom = '';
  @Output() newProductClicked = new EventEmitter<string>();
  @Output() newDisplayProduct = new EventEmitter<string>();

  target: any;

  totalFac = 0;
  display_details: boolean = true;


  constructor(
    private route: Router,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.target = { vat: 0, prix_ttc: 0, code: 'Guest', name: 'Guest', prix_ht: 0 };
  }

  passId(e){
    let id = e.target.id;
    let identifier = id.slice(11);
    if (id.slice(4, 11) == "Edition") {
      this.newProductClicked.emit(identifier);
    }
    if (id.slice(4, 11) == "Display") {
      if (this.route.url == "/products") {
        this.newDisplayProduct.emit(identifier);
      }
      if(this.route.url == "/my-clients"){
        this.route.navigateByUrl("/my-clients/details_client/" + identifier);
      };
        
    }
  }



  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
  }
  onImgError(event) {
    event.target.src = './assets/images/smarteo.png'
  }
  test(event) {
    console.log(event);
  }

  onPageIndexChange(pageIndex: number) {
    this.current = pageIndex;
  }
}
