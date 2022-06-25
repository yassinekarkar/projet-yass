import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products.model';
import { ProductsService } from '../../../../core/services/product.service';
import { VatsService } from 'src/core/services/vats.service';
import { UnitiesService } from 'src/core/services/unities.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { IVat } from 'src/core/interfaces/vat.interface';
import { IUnity } from 'src/core/interfaces/unity.interface';


@Component({
  selector: 'app-affiche_details',
  templateUrl: './affiche_details.component.html',
  styleUrls: ['./affiche_details.component.less']
})
export class Affiche_detailsComponent implements OnInit {


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

  


}
