import { TestBed } from '@angular/core/testing';

import { AnalyticsDataService } from './analytics-data.service';

describe('AnalyticsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyticsDataService = TestBed.get(AnalyticsDataService);
    expect(service).toBeTruthy();
  });
});
