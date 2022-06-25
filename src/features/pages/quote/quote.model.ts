import { Product } from "../products/products.model";

export class Quote {
    id: number;
    code: string;
    date_begin: string;
    date_end: string
    client_name: string;
    created_at: string;
    status: string;
    client: string;
    client_address: string;
    client_zipcode: string;
    client_city: string;
    discount: number;
    discount_total: number;
    creator : string;
    dateBegin: string;
    currency: string;
    discount_on_total: boolean;
    discount_on_value: boolean;
    dateEnd: string;
    estimate_number: string;
    estimateNumber: string;
    pre_note: string;
    post_note: string;
    language: string;
    head: string;
    company: string;
    company_name: string;
    company_zipcode: string; 
    company_address: string;
    company_city: string;
    company_mail: string;
    totalTTC : number;
    totalAfterDiscount: number;
    discount_fixed_value: boolean;
    products = [];

}