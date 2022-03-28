import { Component, OnChanges, OnInit } from '@angular/core';

import { AvailableShipmentsComponent } from './available-shipments/available-shipments.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //laita objektiin
  R_postcode: any = '';
  R_address: string = '';
  R_city: string = '';
  R_name: string = '';
  R_email: string = '';
  R_phoneNumber: any;
  receiverinfo: Array<any> = [];
  senderinfo: object = {};
  reciverinfo: object = {};
  parcelinfo: any;
  filled = '';
  wantedServiceId: Array<any> = [];
  selectedServiceId: Array<any> = [];
  apirespone: any;
  dropdownList: Array<any> = [];
  selectedItems: Array<any> = [];
  constructor(private http: HttpClient) {}
  dropdownSettings = {};
  //Esiasteinen filteröinti
  addSelectedServiceId(event: any) {
    this.selectedServiceId = event;
    console.log(event);
  }

  //lähetetään parametreillä haku shipitin apiin.

  onSubmit(data: any) {
    let datasubmitter = new submitData();
    let receiverinfot: any = {
      postcode: data.R_postcode,
      address: data.R_address,
      city: data.R_city,
      email: data.R_email,
      phone: data.R_phoneNumber,
      name: data.R_name,
      country: 'FI',
    };
    this.receiverinfo = receiverinfot;
    this.R_postcode = data.R_postcode;
    this.R_address = data.R_address;
    this.senderinfo = datasubmitter.sender;
    this.parcelinfo = datasubmitter.parcels;
    datasubmitter.postcode = data.R_postcode;
    console.log(this.selectedServiceId);
    this.http
      .post('http://localhost:8000/shipping-methods', datasubmitter)
      .subscribe((response) => {
        console.log(response);
        this.apirespone = response;
      });
  }
}

export class submitData {
  country: string = 'FI';
  postcode: string = '';
  //tämä voisi olla yrityksen tiedot...
  sender: object = {
    postcode: '11100',
    country: 'FI',
    address: 'Kaartokatu 10 C 27',
    city: 'Riihimäki',
    email: 'mirko.piitulainen@hotmail.com',
    phone: '0400645186',
    name: 'Mirko Piitulainen',
  };

  //MUISTA! Parcel määrittelee myös sen, ketkä voi lähettää, ja kuinka voi lähettää
  parcels: Array<any> = [
    { type: 'PACKAGE', length: 1, width: 1, height: 1, weight: 1 },
  ];
}
