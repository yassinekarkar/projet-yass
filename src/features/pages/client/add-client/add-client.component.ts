import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICountry} from 'src/core';
import { Client } from '../client.model';
import { IPaymentCondition } from 'src/core/interfaces/paymentCondition.interface';
import { PaymentConditionsService } from 'src/core/services/payment-conditions.service';
import { ClientsService } from 'src/core/services/client.service';
import { CountriesService } from 'src/core/services/counties.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.less']
})

export class AddClientComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountriesService,
    private clientService: ClientsService,
    private paymentService: PaymentConditionsService 
    ) { }

  client : Client
  paymentConditionList : IPaymentCondition[]=[] ;
  countryList : ICountry[]=[] ;
  addForm: FormGroup = new FormGroup({});
  displayEntrepriseName: boolean = false;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      type: ['', Validators.required],
      vatNumber: ['', Validators.required],
      registryNumber: ['', Validators.required],
      name: ['no Name', Validators.required],
      paymentCondition: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.getPaymentCondition();
    this.getCountries();
  }


  public addClient() {
    this.clientService.addClient(this.addForm.value).subscribe((data) => {console.log(data)})
    this.addForm.reset()
  }

  private getCountries() {
    this.countryService.getCountriesSuccess().subscribe((countries: any) => {
    this.countryService.getCountries();
      this.countryList = countries?.results?.data
    })
  }
  displayEntrepriseNameInput(event){
    if (event.target.value === 'PROFESSIONAL') this.displayEntrepriseName = true;
    if (event.target.value === 'PARTICULAR') this.displayEntrepriseName = false;
  }
  private getPaymentCondition() {
    this.paymentService.getPaymentCondition();
    this.paymentService.getPaymentConditionSuccess().subscribe((paymentCondition: any) => {
      this.paymentConditionList = paymentCondition?.results?.data?.rows      
    })
  }
}
