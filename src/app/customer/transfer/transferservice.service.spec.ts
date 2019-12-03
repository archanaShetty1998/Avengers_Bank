import { TestBed } from '@angular/core/testing';

import { TransferserviceService } from './transferservice.service';

describe('TransferserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferserviceService = TestBed.get(TransferserviceService);
    expect(service).toBeTruthy();
  });
});
