import {Component, OnInit, Input} from '@angular/core';
import {Bill} from './bills.model';
import { BillsService } from 'src/core/services/bill.service';
import {ICompany, ITable, ITableData} from "../../../core";
import { BILLSLIST } from 'src/mocks/bills.mockes';

@Component({
  selector: 'el-bills-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.less']
})
export class BillsComponent {
  bills$ : Bill[];
  @Input() dataFrom = '';
  @Input() BILLS = BILLSLIST ;
  @Input() listOfData: ITable = {
    header: [
     
      { name: 'client_name' },
      { name: 'created_at' },
      { name: 'total_price_ttc' },
      { name: 'status' },
      { name: 'actions' }
    ],
    data: this.BILLS as ITableData[] ,
    actions: [],
    nameTable: ['bills']
  };

  constructor(private billService: BillsService ) {}

  ngOnInit() {
    //this.getCountriesList() ;
    this.listOfData.actions= [
      {
        name: 'common.update',
        icon: 'edit',
        fn: (data: ICompany) => {
          console.log(data);
        }
      },
      {
        name: 'common.show_details',
        icon: 'eye',
        fn: (data: ICompany) => {
          console.log(data);
        }
      },
    ]

    return this.billService.getBills()
    .subscribe((data :any) => { console.log(data);
     this.listOfData.data= data.results.data.rows})

  

  }

}
