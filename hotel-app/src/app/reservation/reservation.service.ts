import { InjectionToken } from '@angular/core';
import { Reservation } from '../models/reservation';

export const RESERVATION_SERVICE = new InjectionToken<ReservationService>('reservation.service');
const RESERVATIONS_KEY : string = "reservations"

export interface ReservationService {
  getReservations(): Reservation[]
  getReservation(id: string): Reservation | undefined
  addReservation(reservation: Reservation) : void
  deleteReservation(id: string) : void
  updateReservation(id: string, updatedReservation: Reservation): void
}


export class ReservationServiceImpl implements ReservationService{

  private reservations: Reservation[] = []

  constructor() {
    const jsonReservations =  localStorage.getItem(RESERVATIONS_KEY)
    this.reservations = jsonReservations ? JSON.parse(jsonReservations) : []
  }

  getReservations(): Reservation[] { return this.reservations }

  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(reservation => reservation.id === id)
  }

  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString()
    this.reservations.push(reservation)
    this.#storeReservations()
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(reservation => reservation.id === id)
    this.reservations.splice(index, 1)
    this.#storeReservations()
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    updatedReservation.id = id
    let index = this.reservations.findIndex(reservation => reservation.id === updatedReservation.id)
    this.reservations[index] = updatedReservation
    this.#storeReservations()
  }

  #storeReservations() {
    localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(this.reservations))
  }
}
