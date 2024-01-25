import { InjectionToken } from '@angular/core';
import { Reservation } from '../models/reservation';

export const RESERVATION_SERVICE = new InjectionToken<ReservationService>('reservation.service');

export interface ReservationService {
  getReservations(): Reservation[]
  getReservation(id: string): Reservation | undefined
  addReservation(reservation: Reservation) : void
  deleteReservation(id: string) : void
  updateReservation(updatedReservation: Reservation): void
}

export class ReservationServiceImpl implements ReservationService {

  private reservations: Reservation[] = []

  getReservations(): Reservation[] { return this.reservations }

  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(reservation => reservation.id === id)
  }

  addReservation(reservation: Reservation) {
    this.reservations.push(reservation)
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(reservation => reservation.id === id)
    this.reservations.splice(index, 1)
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(reservation => reservation.id === updatedReservation.id)
    this.reservations[index] = updatedReservation
  }
}
