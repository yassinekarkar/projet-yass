import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {AuthService} from "../../core/services/auth.service";
import {CountriesService} from "../../core/services/counties.service";

@Component({
  selector: 'el-bill-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  @Input() url = '';
  unsubscribeAll: Subject<any>;

  year = new Date().getFullYear();

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _authService: AuthService,
              private _contriesService: CountriesService,
              ) {
    this.unsubscribeAll = new Subject();
  }




  ngOnInit(): void {
    this.authForm = this._formBuilder.group({
      username: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      intention : ['FRONT', [Validators.required]],
    });

   // this.getCountriesList() ;
  }


  getCountriesList() {
    this._contriesService.getCountries() ;
    this._contriesService.getCountriesSuccess().subscribe((res : any ) => {
    })
  }

  submit() {
    for (const I in this.authForm.controls) {
      if (!Object.prototype.isPrototypeOf.call(this.authForm.controls, I)) {
        this.authForm.controls[I].markAsDirty();
        this.authForm.controls[I].updateValueAndValidity();
      }
    }

      this._authService.login( this.authForm.value);
      this._authService.loginSuccess().subscribe( (currentUser : any )=> {
      // localStorage.setItem('jwt',currentUser.results.jwt ) ;
        this._router.navigate(['/'])
      })

    }

  goTO(path:string) {
     this._router.navigate([path])
  }
}
