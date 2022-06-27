import { HttpClient, HttpHeaders } from '@angular/common/http';
import { receiverinfo, senderinfo } from './api-info';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipitAPIService {
  baseURL: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  postAgent(payload: Object): Observable<any> {
    return this.http.post<any>(this.baseURL + 'agents', payload);
  }

  postShippingMethods(payload: Object): Observable<any> {
    return this.http.post<any>(this.baseURL + 'shipping-methods', payload);
  }
  putShipment(payload: Object): Observable<any> {
    return this.http.put<any>(this.baseURL + 'shipment', payload);
  }
}
