import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
 
import { Quote } from '../quote.model';
import {Client} from './../../client/client.model'
import { QuotesService } from '../../../../core/services/quote.service';
import{NgModel}from'@angular/forms'
//import { ToastrService } from 'ngx-toastr';
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
import { QUOTESLIST } from 'src/mocks/quotes.mockes';


@Component({
  selector: 'app-affiche_details',
  templateUrl: './affiche_details.component.html',
  styleUrls: ['./affiche_details.component.css']
})
export class Affiche_detailsComponent implements OnInit {
  quote : Quote
  
  clientsList : Client[]=[] ;
  languagesList : ILanguage[]=[] ;
  currenciesList : ICurrency[]=[] ;
   UserList : IUser[]=[] ;
 
   vatsList : IVat[]=[] ;
 
   uitiesList : IUnity[]=[] ; 
 
   userInfo : IUser ; 
  constructor(private quoteServ: QuotesService,private router:ActivatedRoute ,private unityService: UnitiesService, private vatServie:VatsService,private clientSer: ClientsService,private currencySer: CurrenciesService,private languageServ: LanguagesService,private UserInfoSer: UserInformationService,private userSer: UserCallerService,private forb:FormBuilder,private _notification: NzNotificationService,private route:Router) {}

  ngOnInit() {      
    this.quoteServ.getQuote("ca1d3cb7-ac44-4b84-b590-8a32657bffba").subscribe
    ((result : any) => {
      console.log(result);    
     }
    ),

    this.quote = QUOTESLIST[0];
    
    //Ajouter la liste des produits 

    let body = document.querySelector('#productList');
    this.quote.products.forEach(element => {
      let row = document.createElement('div');
      row.classList.add('row','my-3','text-start','fs-6', 'border','border-2', 'rounded-2');
      row.innerHTML = "<div class='col-sm-1'> " + element.code + "</div>";
      row.innerHTML += "<div class='col-sm-2'> " + element.name + "</div>";
      row.innerHTML += "<div class='col-sm-2'> " + element.quantity + "</div>";
      row.innerHTML += "<div class='col-sm-2'> " + element.prix_ht + "</div>";
      row.innerHTML += "<div class='col-sm-1'> " + element.vat + "</div>";
      row.innerHTML += "<div class='col-sm-2'> " + element.remise + "</div>";
      row.innerHTML += "<div class='col-sm-2'> " + element.prix_ttc + "</div>";
      body.appendChild(row);
    });
    
    this.getClients();
    this.getLanguages();
    this.getCurrencies();
    this.getVats();
    this.getUnities();
    this.getUserInformation();   
  };


  getLanguages() {
    this.languageServ.getLanguages();
    this.languageServ.getLanguagesSuccess().subscribe((languages :any) => {
      //console.log("test language", languages)
    this.languagesList = languages?.results?.data?.rows ;
  })
 }
  
  
 getCurrencies() {
  this.currencySer.getCurrencies();
  this.currencySer.getCurrenciesSuccess().subscribe((currencies :any) => {
  //  console.log("test currency", currencies)
  this.currenciesList = currencies?.results?.data?.rows ;
  
 })
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


    getClients() {
   this.clientSer.getClients()
   .subscribe((data :any) => { //console.log(data);
     this.clientsList= data.results.data.rows})
 
  } 


  getUserInformation() {
   this.UserInfoSer.getUserInfo()
   .subscribe((data :any) => {
     console.log("USERINFO",data.results.data.user);
     this.userInfo= data.results.data.user})
 
  }  
 


}
