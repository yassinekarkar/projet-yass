import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.less']
})
export class DisplayProductComponent implements OnInit {
  
  @Input() details:any = {};
  
  titre = this.details['titre'];
  tva = this.details['tva'];
  unit = this.details['unit'];
  price = this.details['price'];
  code = this.details['code'];
  
  constructor() { }
  
  ngOnInit(): void {   
    this.titre = this.details['titre'];
    this.tva = this.details['tva'];
    this.unit = this.details['unit'];
    this.price = this.details['price'];
    this.code = this.details['code'];
  }

  test(){
    console.log(this.details);
  }


}
