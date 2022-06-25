import {ICurrency} from "./currency.interface";

export interface ICountry {
  name?: string;
  shortname?: string;
  currency?: ICurrency;
}
