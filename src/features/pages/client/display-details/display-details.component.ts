import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ICountry } from 'src/core';
import { IPaymentCondition } from 'src/core/interfaces/paymentCondition.interface';
import { PaymentConditionsService } from 'src/core/services/payment-conditions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/core/services/client.service';
import { CountriesService } from 'src/core/services/counties.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.less']
})

export class DisplayDetailsComponent implements OnInit {
  client: Client
  paymentConditionList: IPaymentCondition[] = [];
  countryList: ICountry[] = [];
  res: boolean = false

  constructor(private route: Router, private ClientSer: ClientsService, private countryS: CountriesService, private paCon: PaymentConditionsService, private router: ActivatedRoute, private _notification: NzNotificationService) { }

  ngOnInit() {
    let clientIdentifier = this.route.url.slice(27)
    this.ClientSer.getClient(clientIdentifier).subscribe
      ((result: any) => {
        this.client = result?.results?.data?.data
        if(this.client.name = "no Name") this.client.name ="";
      })  
   }

}


