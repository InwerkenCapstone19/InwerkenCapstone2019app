import { TestBed } from '@angular/core/testing';

import { DataReadingService } from './data-reading.service';

describe('DataReadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataReadingService = TestBed.get(DataReadingService);
    expect(service).toBeTruthy();
  });
});
