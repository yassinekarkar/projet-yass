import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'el-bill-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.less']
})
export class SubHeaderComponent implements OnInit {
  
  @Input() canGoBack = false;
  @Input() title=''
  @Input() url=''
  @Input() display='false';

  routeIsProduct : boolean = false;
  
  constructor( private _location: Location , private _router:Router) { }
  ngOnInit(): void {
    if(this._router.url == '/products') {
      let addElement = document.querySelector('#addButton')
      addElement.setAttribute('data-bs-toggle','modal');
      this.routeIsProduct = true;
    } 

  }
  
  changeModelValue() {
    if(this._router.url == '/products') {
      let addElement = document.querySelector('#addButton')
      addElement.setAttribute('data-bs-toggle','modal');
    }
  }

  goBack() {
    this._location.back();
  }

  goTo(){
    this._router.navigateByUrl(this.url)
  }

}
