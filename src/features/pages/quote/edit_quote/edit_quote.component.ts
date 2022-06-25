import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators, FormControlName, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Quote } from '../quote.model';
import { Client } from './../../client/client.model'
import { QuotesService } from '../../../../core/services/quote.service';
import { NgModel } from '@angular/forms'
//import { ToastrService } from 'ngx-toastr';
import { DynammicFormComponent } from 'src/shared/components/dynammic-form/dynammic-form.component';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ClientsService } from 'src/core/services/client.service';

import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { ILanguage } from 'src/core/interfaces/language.interface';
import { LanguagesService } from 'src/core/services/languages.service';
import { CurrenciesService } from 'src/core/services/currencies.service';
import { ICurrency } from 'src/core/interfaces/currency.interface';
import { UserCallerService } from 'src/core/services/user.service';
import { IUser } from 'src/core/interfaces/user.interface';
import { UserInformationService } from 'src/core/services/userInformation.service';
import { VatsService } from 'src/core/services/vats.service';
import { UnitiesService } from 'src/core/services/unities.service';

import { IVat } from 'src/core/interfaces/vat.interface';
import { IUnity } from 'src/core/interfaces/unity.interface';
import { ligne } from '../ligne.model';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-edit_quote',
  templateUrl: './edit_quote.component.html',
  styleUrls: ['./edit_quote.component.css']
})
export class Edit_quoteComponent implements OnInit {

  title: string = 'DEVIS'
  documentTitle: string = 'DEVIS';
  formQuote: FormGroup;
  
  allQuotes: Observable<Quote[]>;
  
  totalHT: number = 0;
  totalTTC: number = 0;
  
  model = new Quote();
  quoteCreator :string;
  itemList = []; 
  discount = 0;
  discountVal = this.discount;
  displayRemiseTotal: boolean = true;
  displayRemiseColumn: boolean = !this.displayRemiseTotal;
  thereIsDiscount: boolean = false;


  code = ''

  // private getDataLigne(className) {
  //   var Inputs = Array.from(document.getElementsByClassName(className));
  //   var data = {};
  //   Inputs.forEach(element => {
  //     data[element['name']] = element['value'];  
  //   })
  //   return data;
  // }

  onSubmit(data) {
    // this.DevisInformation['GlobaleInformation'] = data.value;
    // this.DevisInformation['products'] = [];
    // this.lignes.forEach(element => { 
    //   this.DevisInformation['CommandeLignes'].push(this.getDataLigne(element));
    // });
    // console.log(this.DevisInformation);    // this.DevisInformation['GlobaleInformation'] = data.value;
    // this.DevisInformation['products'] = [];
    // this.lignes.forEach(element => { 
    //   this.DevisInformation['CommandeLignes'].push(this.getDataLigne(element));
    // });
    // console.log(this.DevisInformation);    
  };


  quote : Quote
  res: boolean = false
  clientsList: Client[] = [];
  languagesList: ILanguage[] = [];
  currenciesList: ICurrency[] = [];
  UserList: IUser[] = [];
  vatsList: IVat[] = [];
  uitiesList: IUnity[] = [];
  userInfo: IUser;
  
  editQuote = new FormGroup({
    client: new FormControl(''),
    dateBegin: new FormControl(''),
    dateEnd: new FormControl('') ,
    estimateNumber: new FormControl(''),
    preNote: new FormControl(''),
    postNote: new FormControl(''),
    head: new FormControl(''),
    language: new FormControl(''),
    currency: new FormControl(''),
    discountTotal: new FormControl(''),
  })
  constructor(private router:ActivatedRoute,private quoteServ: QuotesService, private unityService: UnitiesService, private vatServie: VatsService, private clientSer: ClientsService, private currencySer: CurrenciesService, private languageServ: LanguagesService, private UserInfoSer: UserInformationService, private userSer: UserCallerService, private formBuilder: FormBuilder, private _notification: NzNotificationService, private route: Router) { }

  ngOnInit() {

    console.log(this.router.snapshot.queryParams.id);
    
    this.quoteServ.getQuote(this.router.snapshot.queryParams.id).subscribe
    ( (result : any)=>{
      //console.log( 'cccc' , result);
      this.quote = result.results.data.product
      console.log( 'test test' , this.quote);

      
     }
    ),

    //this.getCountriesList() 
   // this.getAllQuotes();
    this.getClients();
    this.getLanguages();
    this.getCurrencies();
    this.getVats();
    this.getUnities();
    this.getUserInformation();
  }
  getItemList(event) {
    this.itemList = event;
    console.log(event);
    
  }

  public passValue() {
    this.discountVal = this.discount;
  }

 /* public addQuote() {
    console.log(this.code);
    console.log(this.displayRemiseColumn);
    let finalObject = {};
    finalObject = this.formQuote.value;
    finalObject['creator'] = this.userInfo.code;
    finalObject['products'] = this.itemList;
    finalObject['discount'] = this.thereIsDiscount;
    finalObject['discount_fixed_value'] = this.displayRemiseColumn;
    finalObject['discount_on_total'] = this.displayRemiseTotal;
    finalObject['status'] = 'DRAFT';
    console.log("quote donnees",finalObject);
    
    // Post code to backend Api
    
    this.quoteServ.addQuote(finalObject).subscribe(
    (res:any)=> {
             console.log("success",res);
             this._notification.create('info',
             'Ajout',
             `L\'ajout a été fait avec succès` );
             this.route.navigateByUrl("/quotes")             

    });

  }*/


//getters

getAllQuotes() {
  this.allQuotes = this.quoteServ.getQuotes();
}

getClients() {
  this.clientSer.getClients()
    .subscribe((data: any) => { //console.log(data);
      this.clientsList = data.results.data.rows
    })


}

getUserInformation() {
  this.UserInfoSer.getUserInfo()
    .subscribe((data: any) => {
      console.log("USERINFO", data.results.data.user);
      this.userInfo = data.results.data.user
    })
    console.log(this.userInfo);
}

/* getUserCalller() {
   this.userSer.getUserInfo()
   .subscribe((data :any) => { //console.log("user caller", data);
     this.UserList= data.results.data.rows})
    console.log("user", this.UserList)
 
 }  */


getLanguages() {
  this.languageServ.getLanguages();
  this.languageServ.getLanguagesSuccess().subscribe((languages: any) => {
    //console.log("test language", languages)
    this.languagesList = languages?.results?.data?.rows;

  })
}


getCurrencies() {
  this.currencySer.getCurrencies();
  this.currencySer.getCurrenciesSuccess().subscribe((currencies: any) => {
    //  console.log("test currency", currencies)
    this.currenciesList = currencies?.results?.data?.rows;

  })
}

getVats() {
  this.vatServie.getVats();
  this.vatServie.getVatsSuccess().subscribe((vats: any) => {
    this.vatsList = vats?.results?.data?.rows;

  })
}

getUnities() {
  this.unityService.getUnities();
  this.unityService.getUnitiesSuccess().subscribe((unities: any) => {
    this.uitiesList = unities?.results?.data?.rows
  })
}


onChangeVat(newValue) {
  console.log(newValue.target.value);
  this.formQuote.value.vat = newValue.target.value

}

onChangeUnity(newValue) {
  console.log(newValue.target.value);
  this.formQuote.value.unity = newValue.target.value

}


onChangeClient(newValue) {
  this.code = newValue.target.value;
  //this.formQuote.value.client  = newValue.target.value

}

onChangeLanguage(newValue) {
  console.log(newValue.target.value);
  this.formQuote.value.language = newValue.target.value

}

onChangeCurrency(newValue) {
  console.log(newValue.target.value);
  this.formQuote.value.currency = newValue.target.value

}

updateQuote()
{
//this.p.code=this.router.snapshot.params.code;
let finalObject = {};
finalObject = this.editQuote.value;
finalObject['creator'] = this.userInfo.code;
finalObject['products'] = this.itemList;
finalObject['discount'] = this.thereIsDiscount;
finalObject['discount_fixed_value'] = this.displayRemiseColumn;
finalObject['discount_on_total'] = this.displayRemiseTotal;
finalObject['status'] = 'DRAFT';
console.log("quote donnees",finalObject);
this.quoteServ.updateQuote(this.router.snapshot.queryParams.id, finalObject).subscribe((result)=>{
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
