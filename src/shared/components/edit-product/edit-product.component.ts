import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/features/pages/products/products.model';
import { ProductsService } from 'src/core/services/product.service';
import { VatsService } from 'src/core/services/vats.service';
import { UnitiesService } from 'src/core/services/unities.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { IVat } from 'src/core/interfaces/vat.interface';
import { IUnity } from 'src/core/interfaces/unity.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.less']
})
export class EditProductComponent implements OnInit {

  product : Product
vatsList : IVat[]=[] ;
   
uitiesList : IUnity[]=[] ;

editProduct = new FormGroup({
  name : new FormControl(''),
  description : new FormControl(''),
  unit_price : new FormControl(''),
  vat : new FormControl(''),
  unity : new FormControl(''),
  
})

res:boolean=false
  constructor(private route: Router,private fb:FormBuilder,private ServPrd:ProductsService,private unityService: UnitiesService,private vatServie:VatsService,private router:ActivatedRoute,private _notification: NzNotificationService) {}


  ngOnInit() {
    console.log(this.router.snapshot.queryParams.id);  
    this.ServPrd.getProduct(this.router.snapshot.queryParams.id).subscribe
    ( (result : any)=>{
      //console.log( 'cccc' , result);
      this.product = result.results.data.product
      console.log( 'test test' , this.product);
     }
    ),
    this.getVats();
    this.getUnities();
    this.updateProduct();
   }

   
    getVats() {
      this.vatServie.getVats();
      this.vatServie.getVatsSuccess().subscribe((vats :any) => {
      this.vatsList = vats?.results?.data?.rows ;
    
  })
  }

  getUnities() {
    this.unityService.getUnities()  ;
    this.unityService.getUnitiesSuccess().subscribe((unities :any) => {
      this.uitiesList = unities?.results?.data?.rows
    })
  }

  onChangeVat(newValue) {
    console.log(newValue.target.value);
   this.editProduct.value.vat  = newValue.target.value
 
}

onChangeUnity(newValue) {
  console.log(newValue.target.value);
 this.editProduct.value.unity  = newValue.target.value

}


updateProduct()

{
console.log(this.editProduct.value);
this.ServPrd.updateProduct(this.router.snapshot.queryParams.id, this.editProduct.value).subscribe((result)=>{
  console.log(result,"data update successful")
  //console.log("updated!")
  //this.toastr.success('Le ,om du groupe à étè modifier avec succées ')
 // this.route.navigateByUrl("/products")
 this._notification.create('info',
 'Modification',
 `Le modification a été fait avec succès` );
 this.route.navigateByUrl("/products")             
 
})
}

}
