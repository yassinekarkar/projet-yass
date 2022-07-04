import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from './products.model';
import { ProductsService } from 'src/core/services/product.service';
import { ICompany, ITable, ITableData } from "../../../core";
import { PRODUCTSLIST } from 'src/mocks/products.mocks';
import { Router } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  templateUrl: './products.component.html',
  selector: 'el-bill-products',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  products$: Product[];
  target: any;
  isVisible: boolean;
  isVisible1:boolean;
  displayDetails: boolean;

  @Input() dataFrom = '';
  @Input() PRODUCTS = PRODUCTSLIST;
  @Input() listOfData: ITable = {
    header: [
      { name: 'name' },
      { name: 'prix_ht' },
      { name: 'vat' },
      { name: 'prix_ttc' },
      { name: 'actions' }
    ],
    data: this.PRODUCTS as ITableData[],
    actions: [],
    nameTable: ['les produits']
  };

  data: Object = {};
  constructor(private productService: ProductsService, private router: Router) { }
  ngOnInit() {
    //this.getCountriesList() ;
    this.listOfData.actions = [
      {
        name: 'common.update',
        icon: 'edit',
        fn: (data: any) => {
          console.log(data);
          this.router.navigateByUrl(`/products/edit_product/?id=${data.code}`)
        }
      },
      {
        name: 'common.show_details',
        icon: 'eye',
        fn: (data: ICompany) => {
          console.log(data);
          this.router.navigateByUrl(`/products/details_product/?id=${data.code}`)
        }
      },
    ]

    return this.productService.getProducts()
      .subscribe((data: any) => {
        console.log(data);
        this.listOfData.data = data.results.data.rows      
      })
    this.isVisible = true;
  }
  
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisible1 = false;
  }

  displayModal(e) {
    console.log(e);
    let productTarget = this.getProductHasId(e);
    this.data = productTarget;
    console.log(this.data);
    this.isVisible = true;
  }

  displayDetailsModal(event) {
    this.isVisible1 = true;
  }

  displayProduct(e) {
    let productTarget = this.getProductHasId(e);
    this.data = productTarget;
    this.displayDetails = true;
  }

  private getProductHasId(_id) {
    let target: any;    
    this.listOfData?.data?.forEach(element => {
      if(element.code == _id) target = element
    });
    return target;
  }
}
