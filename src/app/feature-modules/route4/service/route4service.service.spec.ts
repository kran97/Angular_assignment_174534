import { TestBed } from '@angular/core/testing';

import { Route4serviceService } from './route4service.service';

describe('Route4serviceService', () => {
  let service: Route4serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Route4serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
