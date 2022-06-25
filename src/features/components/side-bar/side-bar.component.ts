import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Subject} from "rxjs";
import {filter, takeUntil} from "rxjs/operators";
import {SIDE_MENU_BUTTONS} from "../../../core";

@Component({
  selector: 'el-bill-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit , OnDestroy {
  year = new Date().getFullYear();
  @Output() handleMenuButton: EventEmitter<void> = new EventEmitter<void>();
  @Input() isCollapsed = false;

  sideMenuButtons = SIDE_MENU_BUTTONS;
  currentRoute = '';

  private _routeSubject: Subject<Event> = new Subject<Event>();

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this._watchRouteChanges();
  }

  ngOnDestroy(): void {
    this._routeSubject.next();
    this._routeSubject.complete();
  }

 private _watchRouteChanges() {
    this.currentRoute = this._router.url;
   this._router.events
     .pipe(
       filter((event): event is NavigationEnd => event instanceof NavigationEnd)
     )
     .subscribe(event => {

       if (event instanceof NavigationEnd) {
         this.currentRoute = event.url;
       }
     });

  }

}
