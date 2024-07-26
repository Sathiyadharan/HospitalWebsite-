import { TestBed } from '@angular/core/testing';

import { DoctorHttpService } from './doctor.http.service.service';

describe('DoctorHttpServiceService', () => {
  let service: DoctorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
