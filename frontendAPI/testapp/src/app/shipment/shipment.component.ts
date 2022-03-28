import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { submitData } from '../app.component';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css'],
})
export class ShipmentComponent implements OnChanges {
  constructor(private http: HttpClient) {}

  shipmentResponse: any;
  @Input() sender: Object = {};
  @Input() receiver: Object = {};
  @Input() serviceId: Array<any> = [];
  @Input() parcels: any;
  /*tarvitaan vielä;
  -item array[desc, quantity, unitvalue, currency, unitwight,trafficcode, countryoforigin]
  -drop in lokaatio, joka on valittu available-shipment komponentista
  -JOS EU ULKOPUOLELLA, NIIN TARVITAAN TYPE (onko lahja jne) sekä CONTENT, VALUE
  -dangerous item bool
  - fragile bool
  pickup, delivery vai delivery09(posti) toggle nappi, vain yksi kelpaa
  - returnFreightDoc bool, jos tarvitaan  palautustarra
  -freetext (muuta tekstiä)
  -reference ???
  - cod (cash-only-delivery) info, objekti jjohon tarvitaan; amount, currencyCode, account, bank sekä referencecode (viitenumero?)
  ja monta muuta.....*/

  ngOnChanges(): void {
    let payload = {
      sender: this.sender,
      receiver: this.receiver,
      parcels: this.parcels,
      serviceId: 'mh.mh10',
    };
    console.log(payload);
    this.http
      .put('http://localhost:8000/shipment', payload)
      .subscribe((response) => {
        console.log('Kun on lähetetty, niin response on tämä:', response);
        this.shipmentResponse = response;
      });
  }
}
