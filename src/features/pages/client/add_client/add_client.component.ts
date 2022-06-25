import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IPaymentCondition } from 'src/core/interfaces/paymentCondition.interface';

import { ProductsService } from '../../../../core/services/product.service';
import{NgModel}from'@angular/forms'
//import { ToastrService } from 'ngx-toastr';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ClientsService } from 'src/core/services/client.service';
import { Observable } from 'rxjs';
import { Client } from '../client.model';
import { Router } from '@angular/router';
import { ICountry, IVat } from 'src/core';

import { PaymentConditionsService } from 'src/core/services/payment-conditions.service';
import { CountriesService } from 'src/core/services/counties.service';
import { VatsService } from 'src/core/services/vats.service';



@Component({
  selector: 'app-add_client',
  templateUrl: './add_client.component.html',
  styleUrls: ['./add_client.component.css']
})
export class Add_clientComponent implements OnInit {
  allClients:Observable<Client[]>;
  c:Client=new Client();
  form!: FormGroup;
   res:boolean=false
   paymentConditionList : IPaymentCondition[]=[] ;
   
   countryList : ICountry[]=[] ;

   vatsList : IVat[]=[] ;
   constructor(private vatServie:VatsService ,private ClientSrv:ClientsService,private paCon: PaymentConditionsService,private countryS:CountriesService,private forb:FormBuilder,private _notification: NzNotificationService,private route:Router) {}

   ngOnInit() {
    //this.getCountriesList() ;
    this.form=this.forb.group
    ({
      name: ['',[Validators.required]]   ,
      country: ['',[Validators.required]]   ,
      paymentCondition: ['',[Validators.required]]   ,
      firstname: ['',[Validators.required]]   ,
     
      lastname: ['',[Validators.required]]   ,

      registryNumber: ['',[Validators.required]]   ,
      vatNumber: ['',[Validators.required]]   ,
      address: ['',[Validators.required]]   ,
      zipcode: ['',[Validators.required]]   ,
      city: ['',[Validators.required]]   ,
      mail: ['',[Validators.required]]   ,
      phone: ['',[Validators.required]]   ,
      type: ['',[Validators.required]]   ,



     }); 
     this.getAllCLients();
     this.getCountries();
     this.getPaymentCondition();
     
    }





public addClient()
{
 
 console.log(this.form.value)
  this.ClientSrv.addClient(this.form.value).subscribe(
  (res:any)=> {
           console.log(res);

  this._notification.create('info',
           'Ajout',
           `L\'ajout a été fait avec succès` );
           this.route.navigateByUrl("/my-clients")         
           
  })}

  onChangeCountry(newValue) {
    console.log(newValue.target.value);
   this.form.value.country  = newValue.target.value
 
}

onChangePaymentCondition(newValue) {
  console.log(newValue.target.value);
 this.form.value.paymentCondition  = newValue.target.value

}



  getAllCLients(){
    this.allClients=this.ClientSrv.getClients();
     }
  

  getCountries() {
    this.countryS.getCountries()  ;
    this.countryS.getCountriesSuccess().subscribe((countries :any) => {
     // console.log("dd",countries?.results?.data?.rows)
      this.countryList = countries?.results?.data
     // console.log( this.countryList )

    })
  }


  getPaymentCondition() {
    this.paCon.getPaymentCondition()  ;
    this.paCon.getPaymentConditionSuccess().subscribe((paymentCondition :any) => {
     console.log("cc",paymentCondition?.results?.data?.rows)
      this.paymentConditionList = paymentCondition?.results?.data?.rows
   //   console.log( this.paymentConditionList )

    })
  }
   
   onEvent(event:any)
   {
   
   }
 

}
