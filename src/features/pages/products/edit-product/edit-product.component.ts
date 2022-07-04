import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/features/pages/products/products.model';
import { ProductsService } from 'src/core/services/product.service';
import { VatsService } from 'src/core/services/vats.service';
import { UnitiesService } from 'src/core/services/unities.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { IVat } from 'src/core/interfaces/vat.interface';
import { IUnity } from 'src/core/interfaces/unity.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.less']
})
export class EditProductComponent implements OnInit {

  @Input() productDetails: Object;
  product: any = {
    prix_ht: 'test',
    description: '',
    name: ''
  };

  vatsList: IVat[] = [
    {
      code: "aez",
      value: "1120"
    }
  ];
  uitiesList: IUnity[] = [];

  editProductForm = new FormGroup({});
  prixTTC: number;
  res: boolean = false
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private ServPrd: ProductsService,
    private unityService: UnitiesService,
    private vatServie: VatsService,
    private router: ActivatedRoute,
    private _notification: NzNotificationService) { }
  
  ngOnInit() {
    this.editProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      unit_price: ['', Validators.required],
      unity: ['', Validators.required],
      vat: ['', Validators.required]
    });
    this.ServPrd.getProduct(this.productDetails['code']).subscribe
      ((result: any) => {
        this.product = result.results.data.product
        this.editProductForm.get('name').setValue(this.product['name']);
        this.editProductForm.get('description').setValue(this.product['description']);
        this.editProductForm.get('unit_price').setValue(this.product['unit_price']);
        this.editProductForm.get('unity').setValue(this.product['unity']);
        this.editProductForm.get('vat').setValue(this.product['vat']);
      }),
      this.getVats();
      this.getUnities();
  }

  public updatePrice() {
    let taxe = this.editProductForm.get('prix_ht').value * (this.editProductForm.get('vat').value / 100);
    this.prixTTC = this.editProductForm.get('prix_ht').value + taxe;
  }
  getVats() {
    this.vatServie.getVats();
    this.vatServie.getVatsSuccess().subscribe((vats: any) => {
    this.vatsList = vats?.results?.data?.rows;
    })
  }
  getUnities() {
    this.unityService.getUnities();
    this.unityService.getUnitiesSuccess().subscribe((unities: any) => {
      this.uitiesList = unities?.results?.data?.rows
    })
  }

  onChangeVat(newValue) {
    this.editProductForm.value.vat = newValue.target.value
  }

  onChangeUnity(newValue) {
    this.editProductForm.value.unity = newValue.target.value
  }


  updateProduct() {
    console.log(this.editProductForm.value);
    this.ServPrd.updateProduct(this.productDetails['code'], this.editProductForm.value).subscribe((result) => {
      this._notification.create('info', 'Modification', `Le modification a été fait avec succès`);
      this.route.navigateByUrl("/products")
    })
  }

}
