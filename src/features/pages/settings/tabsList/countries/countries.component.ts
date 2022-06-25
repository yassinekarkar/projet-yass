import { Component, OnInit, Input } from '@angular/core';
import { CountiesService, ICountry } from 'src/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() countries : ICountry[] =[] ;
  @Input()card : ICountry ;
  @Input() current = 1;
  @Input() total = 100;
  @Input() settings = [];
  @Input() action = "";
  @Input() type = "";


  countriesList : ICountry[]=[] ;

  constructor( private _countryService:CountiesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this._countryService.getCountries()  ;
    this._countryService.getCountriesSuccess().subscribe((countries :any) => {
      this.countriesList = countries?.results?.data?.rows
    })
  }

}
