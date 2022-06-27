import { Component, Input, OnChanges } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ShipitAPIService } from './../shipit-api.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css'],
})
export class ShipmentComponent implements OnChanges {
  constructor(private ShipitAPIService: ShipitAPIService) {}
  @Input() serviceId: any;

  @Input() sender: object = {};
  @Input() receiver: object = {};
  @Input() parcel: object = {};
  @Input() placeId: string = '';
  apiresponse: any;

  ngOnChanges(): void {
    this.shipmentcall();
  }

  shipmentcall() {
    let receiver = this.receiver;
    let sender = this.sender;
    let serviceId = this.serviceId.toString();
    let freeText = 'abcdefghijklmn';
    let parcels = this.parcel;

    /*let payload = { receiver, sender, serviceId, freeText, parcels };
    this.ShipitAPIService.postAgent(payload).subscribe((response) =>
      console.log(response)
    );
    /*let receiver = this.receiver;
    let sender = this.sender;
    let serviceId = this.serviceId.toString();
    let freeText = 'abcdefghijklmn';
    let parcels = this.parcel;

    let payload = { receiver, sender, serviceId, freeText, parcels };
    this.http
      .put('http://localhost:8000/shipment', payload)
      .subscribe((response) => {
        console.log(response);
        this.apiresponse = response;
      });*/
  }
}
