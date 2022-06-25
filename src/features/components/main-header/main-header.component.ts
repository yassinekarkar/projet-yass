import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IUser} from "../../../core";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'el-bill-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less']
})
export class MainHeaderComponent implements OnInit {
  avatarImg = '';
  user: IUser | null = null;
  constructor( private authService:AuthService , private _router:Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout() ;
    this._router.navigate(["/sign-in"])
  }

}
