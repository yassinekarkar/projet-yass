import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Subject} from "rxjs";
import {filter, map, mergeMap} from "rxjs/operators";
import {LoaderService, SeoService} from "../core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements  OnInit{
  loading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private _translationService: TranslateService ,
    private titleService: Title, private router: Router,
    private activatedRoute: ActivatedRoute, private seoService: SeoService ,
    private loaderService: LoaderService,
  ) {
    _translationService.setDefaultLang('fr');
  }


  ngOnInit() {

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe(data => {
      let seoData = data['seo'];
      this.seoService.updateTitle(seoData['title']);
    });
  }

}
