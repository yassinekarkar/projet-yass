import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Quote } from '../quote.model';
import { Client } from './../../client/client.model'
import { QuotesService } from '../../../../core/services/quote.service';
import { NgModel } from '@angular/forms'
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
import { CommonModule } from '@angular/common';
import { IVat } from 'src/core/interfaces/vat.interface';
import { IUnity } from 'src/core/interfaces/unity.interface';
import { QUOTESLIST } from 'src/mocks/quotes.mockes';


@Component({
  selector: 'app-affiche_details',
  templateUrl: './affiche_details.component.html',
  styleUrls: ['./affiche_details.component.css']
})
export class Affiche_detailsComponent implements OnInit {

  quote: any = {
    code: "",
    estimate_number:"",
    status: "",
    pre_note: "",
    post_note:"",
    date_begin: "" ,
    date_end: "" ,
    discount_total: "" ,
    company_mail: "",
    company_name: "",
    company_address: "",
    company_zipcode:"",
    company_city: "",
    client_name: "",
    client_address: "",
    client_zipcode:"",
    client_city: "",
    head: "",
    discount: "",
    discount_on_total : "",
    discount_fixed_value : "",
    created_at: "" ,
    updated_at : "",
    company: "",
    creator: "",
    updator: "",
    client: "",
    currency: "",
    language: "",
    products: [
    ]
  }

  clientsList: Client[] = [];
  languagesList: ILanguage[] = [];
  currenciesList: ICurrency[] = [];
  UserList: IUser[] = [];

  vatsList: IVat[] = [];

  uitiesList: IUnity[] = [];

  userInfo: IUser;

  loaded: boolean = false;

  constructor(private route: Router, private  quoteServ: QuotesService, private router : ActivatedRoute, private unityService: UnitiesService, private vatServie: VatsService, private clientSer: ClientsService, private currencySer: CurrenciesService, private languageServ: LanguagesService, private UserInfoSer: UserInformationService, private userSer: UserCallerService, private forb: FormBuilder, private _notification: NzNotificationService) { }

  ngOnInit() {
    this.quoteServ.getQuote(this.route.url.slice(22)).subscribe
      ((data: any) => {        
        this.quote = data.results.data.quote;
        console.log(this.quote);
        this.resolveCreator();
      });
    this.getUnities();
    this.getClients();
    this.getLanguages();
    this.getCurrencies();
    this.getUserInformation();
    this.getVats();
  };

  private handleProductList() {
    let body = document.querySelector('#productList');
    this.quote.products.forEach(element => {
      let row = document.createElement('div');
      row.classList.add('row', 'my-3', 'text-start', 'fs-6', 'border', 'border-2', 'rounded-2');
      row.innerHTML = "<div class='col-sm-1'> " + element.name + "</div>";
      row.innerHTML += "<div class='unit col-sm-2'> " + this.resolveUnit(element.unity) + "</div>";
      row.innerHTML += "<div class='col-sm-2'> " + element.amount + "</div>";
      row.innerHTML += "<div class='col-sm-2'> " + element.unit_price + "</div>";
      row.innerHTML += "<div class='tva col-sm-1'> " + this.resolveTVA(element.vat) + "</div>";
      row.innerHTML += "<div class='col-sm-2'> " + element.discount + "</div>";
      body.appendChild(row);
    });
  }

  private resolveTVA(code: string) {
    let result;
    this.vatsList?.forEach(element => {
      if (code == element.code) {
        console.log(element.value);
        result = element?.value
      }
    });
    return result
  }

  private resolveUnit(code: string) {
    let result;
    this.uitiesList?.forEach(element => {
      if (code == element.code) {
        console.log(element.name);
        result = element?.name
      }
    });
    return result
  }

  private resolveCreator() {
    this.quote.creator = this.userInfo.firstname + "  " + this.userInfo.lastname;
  }

  getLanguages() {
    this.languageServ.getLanguages();
    this.languageServ.getLanguagesSuccess().subscribe((languages: any) => {
      this.languagesList = languages?.results?.data?.rows;
    })
  }

  getCurrencies() {
    this.currencySer.getCurrencies();
    this.currencySer.getCurrenciesSuccess().subscribe((currencies: any) => {
      this.currenciesList = currencies?.results?.data?.rows;
    })
  }

  getVats() {
    this.vatServie.getVats();
    this.vatServie.getVatsSuccess().subscribe((vats: any) => {
      this.vatsList = vats?.results?.data?.rows;
      console.log(this.vatsList);
      this.handleProductList();
    })
  }

  getUnities() {
    this.unityService.getUnities();
    this.unityService.getUnitiesSuccess().subscribe((unities: any) => {
      this.uitiesList = unities?.results?.data?.rows
      console.log(this.uitiesList);
    })
  }


  getClients() {
    this.clientSer.getClients()
      .subscribe((data: any) => { //console.log(data);
        this.clientsList = data.results.data.rows
        console.log(this.clientsList);

      })

  }


  getUserInformation() {
    this.UserInfoSer.getUserInfo()
      .subscribe((data: any) => {
        console.log("USERINFO", data.results.data.user);
        this.userInfo = data.results.data.user
      })

  }



}
