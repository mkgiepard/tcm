import { TestBed } from '@angular/core/testing';

import { TestPlanService } from './testplan.service';

describe('TestPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestPlanService = TestBed.get(TestPlanService);
    expect(service).toBeTruthy();
  });
});
