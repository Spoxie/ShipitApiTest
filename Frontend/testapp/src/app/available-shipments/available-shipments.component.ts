import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { submitData } from './../app.component';

@Component({
  selector: 'app-available-shipments',
  templateUrl: './available-shipments.component.html',
  styleUrls: ['./available-shipments.component.css'],
})
export class AvailableShipmentsComponent implements OnChanges {
  constructor(private http: HttpClient) {}

  shippingResponse: any;
  @Input() sender: object = {};
  @Input() receiverPostcode: string = '';
  @Input() wantedServiceId: object = {};
  @Output() newItemEvent = new EventEmitter<any>();

  valitut: any = JSON.stringify(this.wantedServiceId);
  hinta: any = '';

  ngOnChanges(): void {
    let sender = this.sender;
    console.log(sender);
    let serviceId = this.wantedServiceId;
    let receiver = { postcode: this.receiverPostcode, country: 'FI' };
    let parcels = new submitData().parcels;

    let payload = { receiver, parcels, sender, serviceId };

    this.http
      .post('http://localhost:8000/shipping-methods', payload)
      .subscribe((response) => {
        console.log('available komponentti response on tämä:', response);
        this.shippingResponse = response;
      });
  }
  clickevent(event: Event, response: any, i: any, serviceId: any) {
    console.log(serviceId);
    this.newItemEvent.emit(this.wantedServiceId);
  }
}
