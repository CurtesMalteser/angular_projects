import { TestBed } from '@angular/core/testing';

import { ReservationServiceImpl } from './reservation.service';

describe('ReservationService', () => {
  let service: ReservationServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
