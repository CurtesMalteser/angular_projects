import { Injectable, InjectionToken } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable, single } from 'rxjs';

export const RESERVATION_SERVICE = new InjectionToken<ReservationService>('reservation.service');

export interface ReservationService {
  getReservations(): Observable<Reservation[]>
  getReservation(id: string): Reservation | undefined
  addReservation(reservation: Reservation) : void
  deleteReservation(id: string) : void
  updateReservation(id: string, updatedReservation: Reservation): void
}

@Injectable()
export class ReservationServiceImpl implements ReservationService{

  private apiUrl = 'http://127.0.0.1:5000'
 
  private reservations: Reservation[] = []

  constructor(private httpClient: HttpClient) {}

  getReservations(): Observable<Reservation[]> { 
    return this.httpClient.get<Reservation[]>(this.apiUrl + '/reservations')
   }

  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(reservation => reservation.id === id)
  }

  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString()
    this.reservations.push(reservation)
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(reservation => reservation.id === id)
    this.reservations.splice(index, 1)
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    updatedReservation.id = id
    let index = this.reservations.findIndex(reservation => reservation.id === updatedReservation.id)
    this.reservations[index] = updatedReservation
  }

}
