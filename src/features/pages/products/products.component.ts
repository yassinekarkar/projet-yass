import {Component, OnInit, Input, Output} from '@angular/core';
import {Product} from './products.model';
import { ProductsService } from 'src/core/services/product.service';
import {ICompany, ITable, ITableData} from "../../../core";
import { PRODUCTSLIST } from 'src/mocks/products.mocks';
import { Router } from '@angular/router';

@Component({
  selector: 'el-bill-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit{
  products$ : Product[];
  
  @Input() dataFrom = '';
  @Input() PRODUCTS = PRODUCTSLIST ;
  @Input() listOfData: ITable = {
    header: [
     
      { name: 'name' },
      { name: 'prix_ht' },
      { name: 'vat' },
      { name: 'prix_ttc' },
      { name: 'actions' }
    ],
    data: this.PRODUCTS as ITableData[] ,
    actions: [],
    nameTable: ['les produits']
  };

  constructor(private productService: ProductsService , private router : Router ) {}

  ngOnInit() {
    //this.getCountriesList() ;
    this.listOfData.actions= [
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
    .subscribe((data :any) => { console.log(data);
     this.listOfData.data= data.results.data.rows})

  }
  
}
