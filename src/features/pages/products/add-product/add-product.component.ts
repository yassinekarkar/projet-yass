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
  prixTTC: number ;
  
  ngOnInit(): void {
    this.prixTTC = 0;
    this.addForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      unity: ['',Validators.required],
      prix_ht: ['',Validators.required],
      vat: ['',Validators.required],
    });
    this.prixTTC = 8 * this.addForm.get('prix_ht').value;
  }

  public updatePrice() {
    let taxe = this.addForm.get('prix_ht').value * (this.addForm.get('vat').value/100);
    this.prixTTC = this.addForm.get('prix_ht').value + taxe;
  }

  public addProduct(){
    console.log(this.addForm.value);
  }

}
