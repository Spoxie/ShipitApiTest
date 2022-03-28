import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shipping-methods',
  templateUrl: './shipping-methods.component.html',
  styleUrls: ['./shipping-methods.component.css'],
})
export class ShippingMethodsComponent implements OnChanges {
  apiresponse: any;
  constructor(private http: HttpClient, http2: HttpClient) {}
  @Input() receiver: object = {};
  @Input() sender: object = {};
  @Input() package: Array<any> = [];
  @Output() serviceId: EventEmitter<any> = new EventEmitter();

  ngOnChanges(): void {
    this.shippingmethdodcall();
  }
  selectService(serviceId: any) {
    this.serviceId.emit(serviceId);
  }
  shippingmethdodcall() {
    let receiver = this.receiver;
    let sender = this.sender;
    let parcels = this.package;
    let payload = { receiver, sender, parcels };

    this.http
      .post<any>('http://localhost:8000/shipping-methods', payload)
      .subscribe((response) => {
        console.log(response);
        this.apiresponse = response;
        console.log(response?.methods);
      });
  }
  agentprecall() {
    this.http.post('http://localhost:8000/agents', 'testu').subscribe((res) => {
      console.log(res);
    });
  }
}
