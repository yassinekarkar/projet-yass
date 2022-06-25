import {Component, Input, OnInit} from '@angular/core';
import {IPaymentCondition, PaymentConditionsService} from "../../../../../core";

@Component({
  selector: 'el-bill-payment-conditions',
  templateUrl: './payment-conditions.component.html',
  styleUrls: ['./payment-conditions.component.less']
})
export class PaymentConditionsComponent implements OnInit {

  @Input()paymentConditions : IPaymentCondition[] =[] ;
  @Input()card : IPaymentCondition ;
  @Input() current = 1;
  @Input() total = 100;
  @Input() settings = [];
  @Input() action = "";
  @Input() type = "";

  paymentConditionsList : IPaymentCondition[]=[] ;

  constructor( private _paymentconditonService:PaymentConditionsService) { }

  ngOnInit(): void {
  }

  getUnities() {
    this._paymentconditonService.getPaymentCondition()  ;
    this._paymentconditonService.getPaymentConditionSuccess().subscribe((paymentConditions :any) => {
      this.paymentConditionsList = paymentConditions?.results?.data?.rows
    })
  }

}
