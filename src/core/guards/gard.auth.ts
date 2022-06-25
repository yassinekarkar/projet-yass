import {Injectable, OnDestroy} from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {AuthService} from "../services/auth.service";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate , OnDestroy {
  currentUser ;
  unsubscribeAll: Subject<any>;
  constructor(
    private authservice: AuthService ,
    private router: Router,
  ) {
    this.unsubscribeAll = new Subject();
  }

  canActivate() {
    const TOKEN =JSON.parse(localStorage.getItem("currentUser")) ;

    /* this.authservice.getCurrentUser().pipe(takeUntil(this.unsubscribeAll)).subscribe((data) => {
       this.currentUser = data;
     })*/
    if (TOKEN ) {
      return true;
    }else {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }

  ngOnDestroy() {

  }
}
