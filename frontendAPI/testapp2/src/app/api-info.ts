export class senderinfo {
  postcode: string = '96100';
  address: string = 'Ratakatu 3';
  city: string = 'Rovaniemi';
  email: string = 'Taisto.testinen@hotmail.com';
  phone: string = '0400999999';
  name: string = 'Taisto Testinen';
  country: string = 'FI';
  contactPerson: string = '';
  state: string = '';
  address2: string = '';
  isCompany: Boolean = false;
  vatNumber: string = '';
}
export class receiverinfo {
  postcode: string = '';
  address: string = '';
  city: string = '';
  email: string = '';
  phone: string = '';
  name: string = '';
  country: string = 'FI';
  contactPerson: string = '';
  state: string = '';
  address2: string = '';
  isCompany: Boolean = false;
  vatNumber: string = '';
}
export class parcelsinfo {
  type: string = '';
  length: string = '';
  width: string = '';
  height: string = '';
  weight: string = '';
  copies: string = '';
}
export class cod {
  amount: number = 0;
  currencyCode: string = 'EUR';
  account: string = '';
  reference: string = '';
}
export class proforma {
  invoiceSubTotal: number = 0;
  otherCharges: number = 0;
  insurance: number = 0;
  incoTerms: string = 'DAP';
  shipperName: string = '';
  invoiceNumber: string = '';
  totalWeight: number = 0;
  freightCharges: number = 0;
  invoiceCurrency: string = 'EUR';
  discount: number = 0;
  invoiceTotal: number = 0;
}
