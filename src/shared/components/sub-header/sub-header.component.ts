import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'el-bill-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.less']
})

export class SubHeaderComponent implements OnInit {

  @Input() canGoBack = false;
  @Input() title = ''
  @Input() url = ''
  @Input() display = 'false';
  @Output() addItem = new EventEmitter<boolean>();
  routeIsProduct: boolean = false;

  constructor(private _location: Location, private _router: Router) { }
  ngOnInit(): void {
    let currentUrl = this._router.url;
    if (currentUrl == '/products') {
      let addElement = document.querySelector('#addButton')
      addElement.setAttribute('data-bs-toggle', 'modal');
      this.routeIsProduct = true;
    } else if (currentUrl == '/quotes') {
      console.log("a");
    }
    else {
      currentUrl == 'my-clients'
    }
  }

  add() {
    if (this._router.url == '/products' || this._router.url == '/my-clients') {
      this.addItem.emit(true);
    }
    if (this._router.url == '/quotes') {
      this._router.navigateByUrl('/quotes/add_quote');
    }
  }

  goBack() {
    this._location.back();
  }

  goTo() {
    this._router.navigateByUrl(this.url)
  }

}
