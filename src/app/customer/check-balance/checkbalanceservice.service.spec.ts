import { TestBed } from '@angular/core/testing';

import { CheckbalanceserviceService } from './checkbalanceservice.service';

describe('CheckbalanceserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckbalanceserviceService = TestBed.get(CheckbalanceserviceService);
    expect(service).toBeTruthy();
  });
});
