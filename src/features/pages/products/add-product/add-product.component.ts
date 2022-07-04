import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VatsService } from 'src/core/services/vats.service';
import { UnitiesService } from 'src/core/services/unities.service';
import { ProductsService } from 'src/core/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private unityService: UnitiesService,
    private tvaService: VatsService,
    private productService: ProductsService) {}

  addForm: FormGroup = new FormGroup({});
  prixTTC: number ;
  tvaList: Array<any> ;
  tvaOptions: Array<any> = [{label:'test', value: 'll'}];
  unitiesList: Array<any> ;  
  
  ngOnInit(): void {
    this.prixTTC = 0;
    this.addForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      unity: ['',Validators.required],
      unit_price: ['',Validators.required],
      vat: ['',Validators.required],
    });
    this.prixTTC = 8 * this.addForm.get('unit_price').value;
    this.getVats();
    this.getUnities();
  }

  public updatePrice(event) {
    let result = this.tvaList.filter((element) => this.addForm.get('vat').value == element['code']);
    let tvaValue = result[0]?.value;
    let taxe = this.addForm.get('unit_price').value * (tvaValue/100);
    this.prixTTC = this.addForm.get('unit_price').value + taxe;
  }

  public addProduct(){
    console.log(this.addForm.value);
    this.productService.addProduct(this.addForm.value).subscribe((data: any) => console.log(data));
  }

  private getVats() {
    this.tvaService.getVats();
    this.tvaService.getVatsSuccess().subscribe((vats: any) => {
    console.log(vats);
    this.tvaList = vats?.results?.data?.rows;
    this.tvaList?.forEach(element => {
      console.log('eee');
      var item:any = {label: 'zztest', value: 'test'};
      console.log(this.tvaOptions);
      
      console.log(this.tvaOptions.push(item))
    });
    this.tvaOptions.push({label: 'testzz', value: 'testzz'});
    // console.log(this.tvaList);
    // this.tvaList.forEach(element => {
    //   let item = {label: element['value'], value: element['code']};
    //   this.tvaOptions.push(item);
    // });
    //   console.log(this.tvaList);
    })
  }
  
  public getUnities() {
    this.unityService.getUnities();
    this.unityService.getUnitiesSuccess().subscribe((unities: any) => {
      console.log(unities); 
      this.unitiesList = unities?.results?.data?.rows
    })
  }
}
