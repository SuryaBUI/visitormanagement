import { TestBed } from '@angular/core/testing';

import { VmsService } from './vms.service';

describe('VmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VmsService = TestBed.get(VmsService);
    expect(service).toBeTruthy();
  });
});
