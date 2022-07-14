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
import { ProductsService } from 'src/core/services/product.service';
import { Product } from 'src/features/pages/products/products.model';
@Component({
  selector: 'app-dynammic-form',
  templateUrl: './dynammic-form.component.html',
  styleUrls: ['./dynammic-form.component.less']
})

export class DynammicFormComponent implements OnInit {

  @Output() newlineEvent = new EventEmitter<any>();
  @Input() remise;
  @Input() currentList: Array<Object>;

  constructor(
    private unityService: UnitiesService,
    private vatServie: VatsService,
    private productService: ProductsService
    ) { }
  counter: number = 0;
  productList: Array<number> = [1];
  itemList: Array<object> = [];
  prodList: Array<Product> = [];
  Display0: boolean =false; 
  Display1: boolean =false; 
  Display2: boolean =false; 
  Display3: boolean =false; 
  Display4: boolean =false; 
  Display5: boolean =false; 
  Display6: boolean =false; 
  Display7: boolean =false; 
  inputNames = ['name', 'amount', 'unity', 'unit_price', 'vat', 'discount'];
  montantHT: number = 0;
  montantTTC: number = 0;
  uitiesList: IUnity[] = [];
  vatsList: IVat[] = [];
  ngOnInit(): void {
    this.getUnities();
    this.getVats();
    this.getProdList();
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
    this.updateCalculate();
    this.counter++;
    this.productList?.push(this.counter);
    this.productList?.forEach(element => {
      let sumPure = (document.querySelector("#unit_price" + element)['value'] * document.querySelector('#amount' + element)['value']);
      // sumPure += sumPure * (document.querySelector('#tva' + element)['value'] / 100);

      document.querySelector("#montant" + element)['value'] = sumPure - sumPure * (document.querySelector("#discount" + element)['value'] / 100);
      console.log(sumPure);
      
    })
  }

  validate(e) {
    e.preventDefault();
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

  public updateCalculate() {
    if (this.counter > 0) {
    this.montantHT = 0;
    let sum = document.querySelectorAll('.mon');
    sum.forEach(element => {
      if(element['value'] != "") this.montantHT += parseFloat(element['value']);      
    })
    }
    this.montantTTC = this.montantHT - (this.montantHT*(this.remise/100));
    
    // if (sum[0]['value'] != "") {
    //   sum.forEach(element => {
    //     if (element['value'] != "") {
    //       this.montantHT += parseInt(element['value']);
    //     }
    //   });
    // }
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
      let obj = document.querySelector('#' + element + _id) as HTMLElement;
      obj['value'] = this.currentList[_id][element];
      if (element == 'vat' || element == 'unity') this.setInputSelect(obj,this.currentList[_id][element]); 
    });
  }
  
  private setInputSelect(parentSelect : HTMLElement, code: string) {
    let optionsCollection = parentSelect.children;
          window.addEventListener('mouseover', function() {
            let arr = Array.from(optionsCollection);
            arr.forEach(optionElement => {
              if (optionElement['value'] == code ) {
                optionElement.setAttribute('selected','true');
              }
            });
          })
  }
  removeMe(event) {
    let element = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement as HTMLElement;
    element.removeChild(document.querySelector('#form' + event.target.id.slice(7)));
    this.productList.splice(event.target.id.slice(7));
  }

  public setPredefinedInputs(e) {
    console.log(e.target.id);   
    let choice = this.prodList.find(p => p.name == e.target.value);
    let elementClicked = e.target as HTMLElement;
    let parentElement = elementClicked.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;    
    //set Unit Price 
    parentElement.querySelector('.unitPrice').value = choice.prix_ht;
    parentElement.querySelector('.Tva').value = this.vatsList.find(vat => vat.value == choice.vat.slice(-choice.vat.length,-2)).code
    parentElement.querySelector('.Unity').value = choice.unity;
  }

  private getVats() {
    this.vatServie.getVats();
    this.vatServie.getVatsSuccess().subscribe((vats: any) => {
      this.vatsList = vats?.results?.data?.rows;

    })
  }

  private getUnities() {
    this.unityService.getUnities();
    this.unityService.getUnitiesSuccess().subscribe((unities: any) => {
      this.uitiesList = unities?.results?.data?.rows
    })
  }
  
  private getProdList() {
    this.productService.getProducts().subscribe((res) => {
      console.log(res);
      this.prodList = res?.results?.data?.rows;
      console.log(this.prodList); 
    });
  }



}
