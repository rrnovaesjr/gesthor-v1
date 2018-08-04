import { TestBed, inject } from '@angular/core/testing';

import { ComponentModelService } from './component-model.service';

describe('ComponentModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentModelService]
    });
  });

  it('should be created', inject([ComponentModelService], (service: ComponentModelService) => {
    expect(service).toBeTruthy();
  }));
});
