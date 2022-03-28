import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ShipitAPIService } from '../shipit-api.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
})
export class AgentsComponent implements OnChanges {
  constructor(private http: HttpClient, private postData: ShipitAPIService) {}
  @Input() serviceId: Array<any> = [];
  @Input() postcode: string = '';
  @Output() placeId: EventEmitter<any> = new EventEmitter();
  @Output() placeServiceId: EventEmitter<any> = new EventEmitter();
  country: string = 'FI';
  type: string = '';
  apiresponse: any;

  ngOnChanges(): void {
    this.agentscall();
  }

  selectPlace(serviceId: any, id: any) {
    this.placeId.emit(id);
    this.placeServiceId.emit(serviceId);
    console.log('klikattu');
  }

  agentscall() {
    let postcode = this.postcode;
    let country = this.country;
    let serviceId = this.serviceId;
    let type = 'DROPIN';
    let payload = { postcode, country, serviceId, type };
    /*this.postData.postAgent(payload).subscribe((response) => {
      if (response.locations == 0) {
        console.log('ei mitään');
      }
      this.apiresponse = response;
    });
  }
}*/
  }
}
