import { TestBed } from '@angular/core/testing';

import { AppointmentHttpServiceService } from './appointment.http.service.service';

describe('AppointmentHttpServiceService', () => {
  let service: AppointmentHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
