import { TestBed, inject } from '@angular/core/testing';

import { ProgressAdvisorService } from './progress-advisor.service';

describe('ProgressAdvisorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressAdvisorService]
    });
  });

  it('should be created', inject([ProgressAdvisorService], (service: ProgressAdvisorService) => {
    expect(service).toBeTruthy();
  }));
});
