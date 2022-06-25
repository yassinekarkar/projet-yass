import {ICompany} from "../core";

export const QUOTESLIST: any = [

  {
    date_begin: "11-06-2022",
    date_end: "23-07-2022",
    client_name: "GuestClient",
    created_at: "01-06-2022",
    totalTTC: 2200,
    totalAfterDiscount: 2000,
    statut: "DRAFT", 
    client: "GuestClient",
    client_address: "Monastir, Moknin",
    client_zipcode: "A006",
    client_city: "Monastir",
    estimateNumber: "6",
    creator : 'Agent Commercial',
    discount : 20, //c'est un pourcentage
    preNote: "BlablaBlablablablabla",
    postNote: "BlablaBlablablablabla",
    language: "Francais",
    discount_on_total : true,
    discount_on_value : false,
    num : 225,
    currency : 'DT',
    company_name : "Facebook", 
    company_zipcode:  "C336",
    company_address: "Tunis, Ariana, Sokra",
    company_city: "Ariana",
    company_mail: "GuestCompany@gmail.com",
    products : [
      {
          id: 0,
         code: "30e7",
         name: "product2",
         quantity : 20,
         prix_ht: 900,
         remise: 0,
         vat: "20 %",
         prix_ttc: 920
       },
       {
         id: 0,
         code: "3697",
         name: "product3",
         prix_ht: 800,
         vat: "10 %",
         remise : 0,
         quantity : 30,
         prix_ttc: 1500
       },
       {
         id: 0,
         code: "30e7",
         name: "product1",
         quantity : 80,
         prix_ht: 850,
         remise :0,
         vat: "5 %",
         prix_ttc: 1200
       },
       {
         id: 0,
         code: "A001",
         name: "product4",
         quantity: 60,
         prix_ht: 900,
         remise: 0,
         vat: "10 %",
         prix_ttc: 500
       }
  
    ]
  },
  {
    date_begin: "12-06-2022",
    date_end: "23-07-2022",
    client_name: "GuestClient",
    created_at: "01-06-2022",
    total_price_ttc: 2200,
    statut: "DRAFT", 
    client: "GuestClient",
    client_address: "Monastir, Moknin",
    client_zipcode: "A006",
    client_city: "Monastir",
    estimateNumber: "6",
    preNote: "BlablaBlablablablabla",
    postNote: "BlablaBlablablablabla",
    language: "Francais",
    num : 225,
    company_name : "Facebook", 
    company_zipcode:  "C336",
    company_address: "Tunis, Ariana, Sokra",
    company_city: "Ariana",
    company_mail: "GuestCompany@gmail.com",
    products : [
      {
          id: 0,
         code: "30e7",
         name: "smarteo",
         prix_ht: 900,
         vat: "20 %",
         prix_ttc: 920
       },
       {
         id: 0,
         code: "30e7",
         name: "smarteo",
         prix_ht: 900,
         vat: "20 %",
         prix_ttc: 920
       },
       {
         id: 0,
         code: "30e7",
         name: "smarteo",
         prix_ht: 900,
         vat: "20 %",
         prix_ttc: 920
       },
       {
         id: 0,
         code: "30e7",
         name: "smarteo",
         prix_ht: 900,
         vat: "20 %",
         prix_ttc: 920
       }
    ]
  }
  
]