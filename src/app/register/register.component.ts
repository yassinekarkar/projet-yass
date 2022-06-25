import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'el-bill-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  @Input() url = '';
  authForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              ) { }

  ngOnInit(): void {
  }

/*
  ngOnInit(): void {
    this.authForm = this._formBuilder.group({
      name: [null, [ Validators.required]],
      email: [null, [ Validators.email ,Validators.required]],
      firstname: [null, [ Validators.required]],
      lastname: [null, [ Validators.required]],
      vat_number: [null, [ Validators.required]],
      register_number: [null, [ Validators.required]],
      phone: [null, [ Validators.required]],
      zipCode: [null, [ Validators.required]],
      city: [null, [ Validators.required]],
      country: [null, [ Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submit() {
    for (const I in this.authForm.controls) {
      if (!Object.prototype.isPrototypeOf.call(this.authForm.controls, I)) {
        this.authForm.controls[I].markAsDirty();
        this.authForm.controls[I].updateValueAndValidity();
      }
    }
    console.log(this.authForm.value);
  }

  */


}
