import { Component, Input, OnInit, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IbansService, ITableData, IUnity, IVat, UnitiesService, VatsService, ICountry, CountriesService } from "../../../core";
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
 selector: 'el-bill-modalSettings',
 templateUrl: './modalSettings.component.html',
 styleUrls: ['./modalSettings.component.less']
})
export class ModalSettingsComponent implements OnInit, OnChanges, OnDestroy {
 @Output() changeHandle = new EventEmitter<boolean>();
@Input() card = { id: 0, name: '', company: '',  code: '' , value: '', iban: '' } ;
//@Input() card : IUnity = { id:0 ,name:'' , company:'' , code:''} ;
 
 @Input() isVisible = false;
 @Input() title = '';
 @Input() action = "";
 @Input() type = "";
 modalForm!: FormGroup;
 cardUpdated ;

 
 uitiesList: IUnity[] = [];

 vatsList: IVat[] = [];

 countryList: ICountry[] = [];

 constructor(private _fb: FormBuilder, private _unityService: UnitiesService,private _countryService: CountriesService  ,private _notification: NzNotificationService, private _vatService: VatsService, private _ibanService: IbansService) { }
 
 ngOnInit() {
  
 }
 
 /*ngOnChanges() {
   console.log(this.type);
  
   this.modalForm = this._fb.group({
   //  name: ['' , Validators.required],
   //  value: ['' ,Validators.required]

    name: [this.card?.name, [Validators.required]] 
    
    
 
   });
 
 
 }*/

 ngOnChanges(){
      if(this.type == 'vat') {

   this.modalForm = this._fb.group({
    //  name: ['' , Validators.required],
    //  value: ['' ,Validators.required]
 
     value: [this.card?.value, [Validators.required]] 
     
     
     }


   )}else if (this.type == 'unity'){
    this.modalForm = this._fb.group({
      //  name: ['' , Validators.required],
      //  value: ['' ,Validators.required]
   
       name: [this.card?.name, [Validators.required]] 
       
       
       })
   }else if (this.type == 'iban'){
    this.modalForm = this._fb.group({
      //  name: ['' , Validators.required],
      //  value: ['' ,Validators.required]
   
       iban: [this.card?.iban, [Validators.required]] 
       
       
       })
   }else if (this.type == 'country'){
     this.modalForm = this._fb.group
     ({
      name: [this.card?.name, [Validators.required]] 
     })
   }
  }
 
 
 getUnities() {
   this._unityService.getUnities();
   this._unityService.getUnitiesSuccess().subscribe((unities: any) => {
     console.log(unities);
   })
 }
 getVats() {
   this._vatService.getVats();
   this._vatService.getVatsSuccess().subscribe((vats: any) => {
     console.log(vats);
   })
 }

 getIbans() {
  this._ibanService.getIbans();
  this._ibanService.getIbansSuccess().subscribe((ibans: any) => {
    console.log(ibans);
  })
}

getCountries() {
  this._countryService.getCountries();
  this._countryService.getCountriesSuccess().subscribe((countries: any) => {
    console.log(countries);
  })
}
 //IbansService
 
 submitForm(): void {
     if (this.action === 'update' && this.type === 'unity') {
       const payload = {
         code: this.card.code,
         name: this.modalForm.value.name,
       }
       this._unityService.updateUnity(payload)
       this._unityService.updateUnitySuccess().subscribe((unityUpdate: any) => {
         if (unityUpdate && unityUpdate.status === "success") {
           this.getUnities()
           this._notification.create(
             'success',
             'Modification',
             'La modification a été fait avec succès'
           );
           this.handleCancel();
         }
 
       })
       
     }
 
     else if (this.action === 'add' && this.type === 'unity') {
       const payload = {
         name: this.modalForm.value.name,
       }
       this._unityService.addUnity(payload)
       this._unityService.addUnitySuccess().subscribe((newUnity: any) => {
         // console.log(newUnity);status: "success"
         if (newUnity && newUnity.status === "success") {
           this.getUnities()
           this._notification.create(
             'info',
             'Ajout',
             `L\'ajout a été fait avec succès`
           );
           this.handleCancel()
         }
 
       })
    
   }
  
  
    else  if (this.action === 'update' && this.type === 'vat') {
      const payload = {
        code: this.card.code,
       // value: this.modalForm.value.value,
      }
      this._vatService.updateVat(payload)
      this._vatService.updateVatSuccess().subscribe((vatUpdate: any) => {
        if (vatUpdate && vatUpdate.status === "success") {
          this.getVats()
          this._notification.create(
            'success',
            'Modification',
            'La modification a été fait avec succès'
          );
          this.handleCancel();
        }

      })
       
      }
     else if (this.action === "add" && this.type === 'vat')  {
        const payload = {
          value: this.modalForm.value.value,
          isDefault: true
        }
        this._vatService.addVat(
          payload
        )
        this._vatService.addVatSuccess().subscribe((result:any)=>{
          if (result && result.status === "success") {
            this.getVats();
            this._notification.create(
              'info',
              'Ajout',
              `L\'ajout a été fait avec succès`
            );
            this.handleCancel()
          }
        })
        //console.log("Add Vat here")
      }

     else if (this.action === 'update' && this.type === 'iban') {
        const payload = {
          code: this.card.code,
          iban: this.modalForm.value.iban,
        }
        this._ibanService.updateIban(payload)
        this._ibanService.updateIbanSuccess().subscribe((ibanUpdate: any) => {
          if (ibanUpdate && ibanUpdate.status === "success") {
            this.getIbans()
            this._notification.create(
              'success',
              'Modification',
              'La modification a été fait avec succès'
            );
            this.handleCancel();
          }
  
        })
      }

      else if (this.action === 'add' && this.type === 'iban') {
        const payload = {
          iban: this.modalForm.value.iban,
        }
        this._ibanService.addIban(payload)
        this._ibanService.addIbanSuccess().subscribe((newIban: any) => {
          // console.log(newUnity);status: "success"
          if (newIban && newIban.status === "success") {
            this.getIbans()
            this._notification.create(
              'info',
              'Ajout',
              `L\'ajout a été fait avec succès`
            );
            this.handleCancel()
          }
  
        })
     
    }

    else  if (this.action === 'update' && this.type === 'country') {
      const payload = {
        code: this.card.code,
       // value: this.modalForm.value.value,
      }
      this._countryService.updateCountry(payload)
      this._countryService.updateCountrySuccess().subscribe((countryUpdate: any) => {
        if (countryUpdate && countryUpdate.status === "success") {
          this.getCountries()
          this._notification.create(
            'success',
            'Modification',
            'La modification a été fait avec succès'
          );
          this.handleCancel();
        }

      })
       
      }
      else if (this.action === 'add' && this.type === 'country') {
        const payload = {
          name: this.modalForm.value.name,
        }
        this._countryService.addCountry(payload)
        this._countryService.addCountrySuccess().subscribe((newCountry: any) => {
          // console.log(newUnity);status: "success"
          if (newCountry && newCountry.status === "success") {
            this.getCountries()
            this._notification.create(
              'info',
              'Ajout',
              `L\'ajout a été fait avec succès`
            );
            this.handleCancel()
          }
  
        })
     
    }  
   
 
    
  
 }
 
 handleCancel(): void {
   this.isVisible = false;
   this.changeHandle.emit(this.isVisible)
 }
 

 updateCard(card) {
   this.cardUpdated = card;
 }
 

 
 ngOnDestroy() {
   this.card = null;
 }
 
}
 

