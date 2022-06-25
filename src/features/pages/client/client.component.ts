import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import { ClientsService } from 'src/core/services/client.service';
import {ICompany, ITable, ITableData} from "../../../core";
import {CLIENTSLIST} from "../../../mocks";
import {Client} from './client.model'
import { Router } from '@angular/router';

@Component({
  selector: 'el-bill-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {
  clients$ : Client[];
  @Input() dataFrom = '';
  @Input() CLIENTS = CLIENTSLIST ;
  @Input() listOfData: ITable = {
    header: [
      { name: 'logo' },
      { name: 'name' },
      { name: 'payed_bill' },
      { name: 'un_payed_bill' },
      { name: 'actions' }
    ],
    data: this.CLIENTS as ITableData[] ,
    actions: [],
    nameTable: ['les clients']
  };
 
  
  constructor(private clientService: ClientsService, private router : Router ) {}

  ngOnInit() {
    //this.getCountriesList() ;
    this.listOfData.actions= [
      {
        name: 'common.update',
        icon: 'edit',
        fn: (data: ICompany) => {
          console.log(data);
          this.router.navigateByUrl(`/my-clients/edit_client/?id=${data.code}`)
        }
      },
      {
        name: 'common.show_details',
        icon: 'eye',
        fn: (data: ICompany) => {
          console.log(data);
          this.router.navigateByUrl(`/my-clients/details_client/?id=${data.code}`)
        }
      },
    ]

    return this.clientService.getClients()
    .subscribe((data :any) => { console.log(data);
     this.listOfData.data= data.results.data.rows})

  

  }
  

  }
