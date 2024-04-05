import { TestBed } from '@angular/core/testing';

import { CustomChangeDetectionSchedulerService } from './custom-change-detection-scheduler.service';

describe('CustomChangeDetectionSchedulerService', () => {
  let service: CustomChangeDetectionSchedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomChangeDetectionSchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
