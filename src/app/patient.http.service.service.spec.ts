import { TestBed } from '@angular/core/testing';

import { patientHttpServiceService } from './patient.http.service.service';

describe('PatientHttpServiceService', () => {
  let service: patientHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(patientHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
