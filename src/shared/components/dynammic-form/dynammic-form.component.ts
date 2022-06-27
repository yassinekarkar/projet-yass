import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { element } from 'protractor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Fake } from '../fake';
import { query } from '@angular/animations';
import { Output, EventEmitter } from '@angular/core';
import { UnitiesService } from 'src/core/services/unities.service';
import { IUnity } from 'src/core/interfaces/unity.interface';
import { IVat } from 'src/core';
import { VatsService } from 'src/core/services/vats.service';

@Component({
  selector: 'app-dynammic-form',
  templateUrl: './dynammic-form.component.html',
  styleUrls: ['./dynammic-form.component.less']
})

export class DynammicFormComponent implements OnInit {

  @Output() newlineEvent = new EventEmitter<any>();
  @Input() remise;
  @Input() currentList: Array<Object>;

  constructor(private unityService: UnitiesService, private vatServie: VatsService) { }
  counter: number = 0;
  productList: Array<number> = [];
  itemList: Array<object> = [];
  inputNames = ['name', 'amount', 'unity', 'unit_price', 'vat', 'discount'];
  montantHT: number = 0;
  montantTTC: number = 0;
  uitiesList: IUnity[] = [];
  vatsList: IVat[] = [];
  ngOnInit(): void {
    this.getUnities();
    this.getVats();
    this.counter = this.currentList.length;
    let indexList = this.currentList.map(element => {
      let i = this.currentList.indexOf(element);
      this.productList.push(i);
    });
    this.productList.push(this.counter);
  }

  ngAfterViewInit() {
    this.fetchCurrentLines();
  }

  add() {
    this.counter++;
    this.productList.push(this.counter);
    this.productList.forEach(element => {
      let sumPure = (document.querySelector("#unitPrice" + element)['value'] * document.querySelector('#quantity' + element)['value']);
      sumPure += sumPure * (document.querySelector('#tva' + element)['value'] / 100);
      document.querySelector("#montant" + element)['value'] = sumPure - sumPure * (document.querySelector("#remise" + element)['value'] / 100);
    })
    // this.updateCalculate();
  }

  validate() {
    this.itemList = [];
    this.productList.forEach(index => {
      let lineObject = {};
      this.inputNames.forEach(element => {
        let value = document.querySelector('#' + element + index)['value'];
        lineObject[element] = value;
      });
      this.itemList.push(lineObject);
    });
    console.log(this.itemList);
    this.newlineEvent.emit(this.itemList);
  }
  private updateCalculate() {
    this.montantHT = 0;
    let sum = document.querySelectorAll('.mon');
    if (sum[0]['value'] != "") {
      sum.forEach(element => {
        if (element['value'] != "") {
          this.montantHT += parseInt(element['value']);
        }
      });
    }
    console.log(this.montantHT);

    // this.montantHT = 0;
    // var a = 0;
    // this.productList.forEach(element => {
    //   let obj = document.querySelector('#montant' + element) as HTMLInputElement;
    //   if ( parseInt(obj['value']) != NaN) {
    //     a += parseInt(obj['value']);
    //   }
    // })
    // console.log(a);
    // this.montantTTC = this.montantHT - (this.montantHT * (this.remise/100));
  }

  private fetchCurrentLines() {
    this.currentList.forEach(element => {
      this.fillCommandLine(this.currentList.indexOf(element));
    })
  }

  private fillCommandLine(_id) {
    this.inputNames.forEach(element => {
      let obj = document.querySelector('#' + element + _id);
      obj['value'] = this.currentList[_id][element]
    });
  }

  removeMe(event) {
    let element = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement as HTMLElement;
    element.removeChild(document.querySelector('#form' + event.target.id.slice(7)));
    this.productList.splice(event.target.id.slice(7));
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



}
