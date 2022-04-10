import { TestBed } from '@angular/core/testing';

import { VeterinariaServicesService } from './veterinaria-services.service';

describe('VeterinariaServicesService', () => {
  let service: VeterinariaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinariaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
