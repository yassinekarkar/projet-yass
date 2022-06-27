import { Component, OnInit } from '@angular/core';
import { DynammicFormComponent } from 'src/shared/components/dynammic-form/dynammic-form.component';
import { FormBuilder, FormControl } from '@angular/forms';
import { LanguagesService } from 'src/core';
import { CurrenciesService } from 'src/core';
import { UnitiesService } from 'src/core';
import { VatsService } from 'src/core';
import { ILanguage } from 'src/core/interfaces/language.interface';
import { ICurrency } from 'src/core/interfaces/currency.interface';
import { IUser } from 'src/core/interfaces/user.interface';

import { ClientsService } from 'src/core/services/client.service';
import { UserCallerService } from 'src/core/services/user.service';
import { UserInformationService } from 'src/core/services/userInformation.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormGroup } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { Validators } from '@angular/forms';
import { QuotesService } from '../../../../core/services/quote.service';
import { Router } from '@angular/router';
import { Quote } from '../quote.model';
import { IVat } from 'src/core/interfaces/vat.interface';
import { IUnity } from 'src/core/interfaces/unity.interface';
import { Client } from '../../client/client.model';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.less']
})

export class EditQuoteComponent implements OnInit {

  editForm: FormGroup = new  FormGroup({});
  quote: any;
  display : boolean = false;
  currentProductList: any = [];
  clientsList: Client[] = [];
  languagesList: ILanguage[] = [];
  currenciesList: ICurrency[] = [];
  UserList: IUser[] = [];
  vatsList: IVat[] = [];
  uitiesList: IUnity[] = [];
  userInfo: IUser;
  itemList: [];
  documentTitle: string;
  discount = 0;
  discountVal = this.discount;
  displayRemiseTotal: boolean ;
  displayRemiseColumn: boolean;
  thereIsDiscount: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private quoteService: QuotesService,
    private _router: Router,
    private unityService: UnitiesService,
    private vatServie: VatsService,
    private clientSer: ClientsService,
    private currencySer: CurrenciesService,
    private languageServ: LanguagesService,
    private UserInfoSer: UserInformationService,
    private userSer: UserCallerService,
    private _notification: NzNotificationService,
  ) { }
  // justForTest: any = {
  //   client: "415ef",
  //   dateBegin: "2015-02-08",
  //   dateEnd: "2022-05-09",
  //   estimateNumber: 88,
  //   preNote: "blablablablblalbalblbalalablblablbalblabl",
  //   postNote: "blbbalblalallballballalblalallballbalbllalba",
  //   discount: 1,
  //   discount_fixed_value: 0, 
  //   discount_on_total: 0,
  //   discountTotal:20,
  //   head: "Devis",
  //   products: [
  //     {
  //       name: "product1",
  //       amount: 150,
  //       unit_price: 120,
  //       vat: "15 %",
  //       discount: 20,
  //       montant: 100,
  //       unity: "Kg"
  //     },
  //     {
  //       name: "product2",
  //       amount: 30,
  //       unit_price: 200,
  //       vat: "15 %",
  //       discount: 20,
  //       montant: 150,
  //       unity: "L"
  //     },
  //     {
  //       name: "product3",
  //       amount: 50,
  //       unit_price: 250,
  //       vat: "15 %",
  //       discount: 10,
  //       montant: 200,
  //       unity: "M"
  //     }
  //   ]
  // }
  code: string;
  ngOnInit(): void {
    let quoteCode = this._router.url.substring(19);
    this.getCurrentQuoteDetails(quoteCode);
    console.log(this.quote);
    this.getClients();
    this.getLanguages();
    this.getCurrencies();
  }

  // ngAfterViewInit(): void {
  //   // this.currentProductList = this.quote.products;
  //   this.editForm = this.formBuilder.group
  //     ({
  //       client: [this.quote['client'], [Validators.required]],
  //       dateBegin: [this.quote['dateBegin'], [Validators.required]],
  //       dateEnd: [this.quote['dateEnd'], [Validators.required]],
  //       estimateNumber: [this.quote['estimateNumber'], [Validators.required]],
  //       preNote: [this.quote['preNote'], [Validators.required]],
  //       postNote: [this.quote['postNote'], [Validators.required]],
  //       head: [this.quote['head'], [Validators.required]],
  //       language: ['', [Validators.required]],
  //       currency: ['', [Validators.required]],
  //       discountTotal: [this.quote['discountTotal'], Validators.required]
  //     });
  //   this.displayRemiseColumn = this.quote['discount_fixed_value'];
  //   this.displayRemiseTotal = this.quote['discount_on_total'];
  //   this.thereIsDiscount = this.quote['discount'];
  // }
  private BuildForm() {
    this.editForm = this.formBuilder.group
      ({
        client: [this.quote['client'], [Validators.required]],
        dateBegin: [this.quote['date_begin'].slice(0,10), [Validators.required]],
        dateEnd: [this.quote['date_end'].slice(0,10), [Validators.required]],
        estimateNumber: [this.quote['estimate_number'], [Validators.required]],
        preNote: [this.quote['pre_note'], [Validators.required]],
        postNote: [this.quote['post_note'], [Validators.required]],
        head: [this.quote['head'], [Validators.required]],
        language: [this.quote['language'] , [Validators.required]],
        currency: [this.quote['currency'], [Validators.required]],
        discountTotal: [this.quote['discount_total'], Validators.required]
      });
    this.displayRemiseColumn = this.quote['discount_fixed_value'];
    this.displayRemiseTotal = this.quote['discount_on_total'];
    this.thereIsDiscount = this.quote['discount'];
    this.currentProductList = this.quote['products'];
  }

  private getCurrentQuoteDetails(code: string) {
    this.quoteService.getQuote(code).subscribe(data => {
      console.log(data.results.data);
      this.quote = data.results.data.quote;
      this.display = true;
      console.log(this.quote);
      this.BuildForm();   
    });
  }

  public passValue() {
    this.discountVal = this.discount;
  }

  public editQuote() {
    console.log(this.displayRemiseColumn);
    let finalObject = {};
    finalObject = this.editForm.value;
    // finalObject['creator'] = this.userInfo.code;
    finalObject['products'] = this.itemList;
    finalObject['discount'] = this.thereIsDiscount ? 1 : 0;
    finalObject['discount_fixed_value'] = this.displayRemiseColumn ? 1 : 0;
    finalObject['discount_on_total'] = this.displayRemiseTotal ? 1 : 0;
    finalObject['status'] = 'DRAFT';
    console.log(finalObject);
    
    //Update Quote
    this.quoteService.updateQuote(finalObject).subscribe(data => console.log(data))
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

  getItemList(event) {
    this.itemList = event;
    console.log(event);

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
    this.editForm.value.vat = newValue.target.value

  }

  onChangeUnity(newValue) {
    console.log(newValue.target.value);
    this.editForm.value.unity = newValue.target.value

  }


  onChangeClient(newValue) {
    this.code = newValue.target.value;
    console.log(this.quote);
    //this.editForm.value.client  = newValue.target.value

  }

  onChangeLanguage(newValue) {
    console.log(newValue.target.value);
    this.editForm.value.language = newValue.target.value

  }

  onChangeCurrency(newValue) {
    console.log(newValue.target.value);
    this.editForm.value.currency = newValue.target.value

  }
}
