import { TestBed } from '@angular/core/testing';

import { ShipitAPIService } from './shipit-api.service';

describe('ShipitAPIService', () => {
  let service: ShipitAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipitAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
