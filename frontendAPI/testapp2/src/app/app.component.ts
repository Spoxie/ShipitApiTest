import {
  cod,
  parcelsinfo,
  proforma,
  receiverinfo,
  senderinfo,
} from './api-info';

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';
import { ShipitAPIService } from './shipit-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  apiresponse: any;
  agentresponse: any;
  constructor(private http: HttpClient, private apidata: ShipitAPIService) {}
  serviceId: Array<any> = [];
  priceinfo: Array<Object> = [
    {
      serviceId: '',
      price: '',
    },
  ];
  title = 'testapp2';
  locations: any;
  wantedplace: any;
  receiver: any;
  sender: any;
  parcels: any;
  dropinId: any;
  fragile: boolean = false;
  dangerous: boolean = false;
  delivery: boolean = true;
  delivery09: boolean = false;
  pickup: boolean = false;
  returnFreightDoc: boolean = false;

  onsubmit(data: any) {
    //shipping-methods
    let receiver = new receiverinfo();
    receiver = {
      postcode: data.R_postcode,
      address: data.R_address,
      city: data.R_city,
      email: data.R_email,
      phone: data.R_phoneNumber,
      name: data.R_name,
      country: 'FI',
      contactPerson: '',
      state: '',
      address2: data.R_address,
      isCompany: false,
      vatNumber: '',
    };
    this.receiver = receiver;
    let sender = new senderinfo();
    this.sender = sender;
    let parcelitem = new parcelsinfo();
    parcelitem = {
      type: 'PACKAGE',
      length: '10',
      width: '10',
      height: '10',
      weight: '30',
      copies: '1',
    };

    let parcels = [parcelitem];
    //Näitä voidaan käyttää, ei pakollista
    let retrievePickupLocations = 'True';
    let companyIsSending = 'True';
    let companyIsReciving = 'True';
    let dangerous = this.dangerous;
    let fragile = this.fragile;
    let maxPickupLocations = '6';
    //let serviceId = "mh.mh10"
    //----------------------------------------
    this.parcels = parcels;
    let payload = { receiver, sender, parcels, retrievePickupLocations };

    let serviceId: any[] = [];
    let locations: any[] = [];

    this.apidata.postShippingMethods(payload).subscribe((response) => {
      this.apiresponse = [response.locations];
      console.log(response);
      for (let i in response.locations) {
        locations.push(response.locations[i]);
      }
      this.locations = locations;
    });
  }
  takeInfo(indexvalue: any, response: any) {
    this.wantedplace = response;
  }
  shipment() {
    let serviceId = this.wantedplace.serviceId;
    let receiver = this.receiver;
    let sender = this.sender;
    let parcels = this.parcels;
    let dropinId = this.wantedplace.id; //TAI PICKUPID
    let Cod = new cod();
    let Proforma = new proforma();
    let externaId = '';
    let inventory = '';
    let resellerId = 0;
    let sendOrderConfirmationEmail = false;
    let FreeText = 'testi';
    let items = [
      {
        description: 'MacBook Pro 2020',
        quantity: 3,
        unitValue: 1.1,
        currency: 'EUR',
        unitWeight: 0.1,
        hsTariffCode: '123456',
        countryOfOrigin: 'FI',
      },
    ];
    let shipmentpayload = {
      sender,
      receiver,
      parcels,
      serviceId,
      FreeText,
      dropinId,
      Cod,
      Proforma,
      externaId,
      inventory,
      resellerId,
      sendOrderConfirmationEmail,
      items,
    };
    this.apidata.putShipment(shipmentpayload).subscribe((response3) => {
      console.log(response3);
    });
  }

  testreceiver = {
    postcode: '00100',
    address: 'Elielinaukio 3',
    city: 'Helsinki',
    email: 'Mirko.piitulainen@hotmail.com',
    phone: '04006666666',
    name: 'Maija Mehiläinen',
  };
}

//MUISTA! Parcel määrittelee myös sen, ketkä voi lähettää, ja kuinka voi lähettää
