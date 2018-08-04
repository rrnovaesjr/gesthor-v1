import { TestBed, inject } from '@angular/core/testing';

import { ComponentModelResolveService } from './component-model-resolve.service';

describe('ComponentModelResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentModelResolveService]
    });
  });

  it('should be created', inject([ComponentModelResolveService], (service: ComponentModelResolveService) => {
    expect(service).toBeTruthy();
  }));
});
