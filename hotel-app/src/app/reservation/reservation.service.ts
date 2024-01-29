import { Injectable, InjectionToken } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, single } from 'rxjs';
import { Endpoint } from '../models/endpoint';
import { environment } from '../../environments/environment';

export const RESERVATION_SERVICE = new InjectionToken<ReservationService>('reservation.service');

export interface ReservationService {
  getReservations(): Observable<Reservation[]>
  getReservation(id: string): Observable<Reservation>
  addReservation(reservation: Reservation) : Observable<void>
  deleteReservation(id: string) : Observable<void>
  updateReservation(id: string, updatedReservation: Reservation): Observable<void>
}

@Injectable()
export class ReservationServiceImpl implements ReservationService{

  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) {}

  getReservations(): Observable<Reservation[]> { 
    return this.httpClient
    .get<Reservation[]>(this.apiUrl + Endpoint.Reservations)
    .pipe(single())
   }

  getReservation(id: string): Observable<Reservation> {
    return this.httpClient
    .get<Reservation>(this.apiUrl + Endpoint.ReservationPath + id)
    .pipe(single())
  }

  addReservation(reservation: Reservation): Observable<void> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient
    .post<void>(this.apiUrl + Endpoint.Reservation, reservation, { headers: headers })
    .pipe(single())
  }

  deleteReservation(id: string): Observable<void> {
    return this.httpClient
    .delete<void>(this.apiUrl + Endpoint.ReservationPath + id)
    .pipe(single())
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient
    .put<void>(this.apiUrl + Endpoint.ReservationPath + id, updatedReservation, { headers: headers })
    .pipe(single())
  }

}
