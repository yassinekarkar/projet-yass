import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICountry} from 'src/core';
import { IPaymentCondition } from 'src/core/interfaces/paymentCondition.interface';
import { PaymentConditionsService } from 'src/core/services/payment-conditions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/core/services/client.service';
import { CountriesService } from 'src/core/services/counties.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-affiche_details',
  templateUrl: './affiche_details.component.html',
  styleUrls: ['./affiche_details.component.css']
})
export class Affiche_detailsComponent implements OnInit {

  client : Client
  paymentConditionList : IPaymentCondition[]=[] ;
   
  countryList : ICountry[]=[] ;
  
  editClient = new FormGroup({
    name : new FormControl(''),
    country : new FormControl(''),
    payment_condition : new FormControl(''),
    firstname : new FormControl(''),
    reference : new FormControl(''),
    lastname : new FormControl(''),
    registry_number : new FormControl(''),
    vat_number : new FormControl(''),
    address : new FormControl(''),
    zipcode : new FormControl(''),
    city : new FormControl(''),
    mail : new FormControl(''),
    phone : new FormControl(''),
    type : new FormControl(''),
    ebill_type : new FormControl(''),
    ebill_identifier : new FormControl(''),
   
  })
  
  res:boolean=false
    constructor(private route: Router,private fb:FormBuilder,private ClientSer:ClientsService,private countryS: CountriesService,private paCon:PaymentConditionsService,private router:ActivatedRoute,private _notification: NzNotificationService) {}
  
  
    ngOnInit() {
      console.log(this.router.snapshot.queryParams.id);
      
      this.ClientSer.getClient(this.router.snapshot.queryParams.id).subscribe
      ( (result : any)=>{
        console.log( 'teeest' , result.results.data.data);
        this.client = result.results.data.data
       // console.log( 'test fedyt' , this.client);
  
        
       }
      ),
      this.getPaymentCondition();
      this.getCountries();
    
    
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
  
   
  

}
