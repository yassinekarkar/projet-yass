import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Product } from '../products/products.model';
import { ProductsService } from '../../../core/services/product.service';





@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form:FormGroup
  formvalue:string=""


Pr: Product[] = [];
selectedOption:string=""
retour:string=""
alert:boolean=false

selected :string=""
selected_:string=""

constructor(private ServPrd:ProductsService,private fb:FormBuilder,private route:Router,private _notification: NzNotificationService) {
  this.form=this.fb.group(
    {
    name:['',
      [Validators.required,Validators.minLength(2)]
    ],
    description:['',
    [Validators.required,Validators.minLength(2)]],
    unit_price:['',
      [Validators.required,Validators.minLength(2)]
    ],
    vat:['',
    [Validators.required,Validators.minLength(2)]
    ],
    unity:['',
    [Validators.required,Validators.maxLength(10)]
    ],
   

    }

  )
}


public getProduct():void
{
   //  console.log(this.getGrp())

this.ServPrd.getProducts().subscribe
(
 ( res:Product[])=>

{  this.Pr=res
  console.log(this.Pr)
},

(error:HttpErrorResponse)=>{
  alert(error.message);
  console.log(error)
}
);
}
  ngOnInit(): void {
  this.getProduct()
 
  }

 

  Ajouter()
  {
//(this.mat()?.value,this.getNom()?.value,this.getPre()?.value,this.getN_ar()?.value,this.getP_ar()?.value,this.age()?.value,this.getdes()?.value,this.getEmail()?.value,this.getCode()?.value,this.getNumT()?.value,this.getAdresse()?.value,this.getVille()?.value,this.getGr()?.value )

(


 (error:HttpErrorResponse)=>
 {alert(error.message);}

);

  }

getName(){
  return this.form.get('name')
}
getDescription(){
  return this.form.get('description')
}

getunit_price()
{
  return this.form.get('unit_price')
}
getVat()
{
  return this.form.get('vat')
}

getUNity()
{
  return this.form.get('unity')
}




}
