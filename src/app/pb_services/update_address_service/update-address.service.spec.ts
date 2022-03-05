import { TestBed } from '@angular/core/testing';

import { UpdateAddressService } from './update-address.service';

describe('UpdateAddressService', () => {
  let service: UpdateAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
