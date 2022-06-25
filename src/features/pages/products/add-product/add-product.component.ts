import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  addForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['',Validators.required],
      code: ['',Validators.required],
      unity: ['',Validators.required],
      prix_ht: ['',Validators.required],
      vat: ['',Validators.required],
      prix_ttc: ['',Validators.required]
    });
  }

  public addProduct(){
    console.log(this.addForm.value);
  }

}
