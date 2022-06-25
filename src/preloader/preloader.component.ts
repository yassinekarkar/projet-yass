import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../core";

@Component({
  selector: 'el-bill-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.less']
})
export class PreloaderComponent implements OnInit {
  loading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

  ngOnInit() {
  }

}
