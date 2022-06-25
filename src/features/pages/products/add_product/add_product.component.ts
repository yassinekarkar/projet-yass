import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Product } from '../products.model';
import { IVat } from 'src/core/interfaces/vat.interface';
import { IUnity } from 'src/core/interfaces/unity.interface';
import { ProductsService } from '../../../../core/services/product.service';
import{NgModel}from'@angular/forms'
//import { ToastrService } from 'ngx-toastr';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { VatsService } from 'src/core/services/vats.service';
import { UnitiesService } from 'src/core/services/unities.service';
import { Observable } from 'rxjs';
 
import { Router } from '@angular/router';


@Component({
  selector: 'app-add_product',
  templateUrl: './add_product.component.html',
  styleUrls: ['./add_product.component.less']
})
export class Add_productComponent implements OnInit {
  allProducts:Observable<Product[]>;
  p:Product=new Product();
  form!: FormGroup;
   res:boolean=false
   vatsList : IVat[]=[] ;
   
   uitiesList : IUnity[]=[] ;
   //selectedDevice = '';

   constructor(private ServPrd:ProductsService,private unityService: UnitiesService, private vatServie:VatsService,private forb:FormBuilder,private _notification: NzNotificationService,private route:Router) {}
 
    ngOnInit() {
      //this.getCountriesList() ;
      this.form=this.forb.group
      ({
          name: ['',[Validators.required]]   ,
          description: ['',[Validators.required]]   ,
          unit_price: ['',[Validators.required]]   ,
          vat: ['',[Validators.required]]   ,
          unity: ['',[Validators.required]]   ,

       
 });
 this.getAllProducts();
 this.getVats();
 this.getUnities();

    }

    onChangeVat(newValue) {
      console.log(newValue.target.value);
     this.form.value.vat  = newValue.target.value
   
  }

  onChangeUnity(newValue) {
    console.log(newValue.target.value);
   this.form.value.unity  = newValue.target.value
 
}
  
    




 
 
 public addProduct()
 {
  
  console.log(this.form.value)
   this.ServPrd.addProduct(this.form.value).subscribe(
   (res:any)=> {
            console.log(res);

            this._notification.create('info',
            'Ajout',
            `L\'ajout a été fait avec succès` );
            this.route.navigateByUrl("/products")             
            
   })}

 
 getAllProducts(){
  this.allProducts=this.ServPrd.getProducts();
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
      

 DeleteProduct(code:number){
  this.ServPrd.deleteProduct(code)
  .subscribe(product=>{
    this.getAllProducts();
  })
}
 
 
 onEvent(event:any)
 {
 
 }

}
