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
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
})
export class AgentsComponent implements OnChanges {
  constructor(private http: HttpClient) {}
  @Input() receiverPostcode: string = '';
  country: string = 'FI';
  @Input() serviceId: Array<any> = [];
  type: string = 'DROPIN';

  ngOnChanges(): void {
    let postcode = this.receiverPostcode;
    let serviceId = this.serviceId;
    let country = this.country;
    let type = this.type;
    let payload = { postcode, serviceId, country, type };
    this.http
      .post('http://localhost:8000/agents', payload)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
