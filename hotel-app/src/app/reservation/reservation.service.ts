import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const RESERVATION_SERVICE = new InjectionToken<ReservationService>('reservation.service');

export interface ReservationService {
  helloService : string

}

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceImpl implements ReservationService {

  helloService: string = 'Hello from ReservationServiceImpl'

  constructor() { }
}
