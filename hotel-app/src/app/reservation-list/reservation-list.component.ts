import { Component, Inject, OnInit } from '@angular/core';
import { RESERVATION_SERVICE, ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = []

  constructor(
    @Inject(RESERVATION_SERVICE) private reservationService: ReservationService,
  ) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe({
      next: (reservations) => this.reservations = reservations,
      error: (e) => console.error(e)
    })
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe({
      next: () => console.log("Successfully deleted reservation with id: " + id),
      error: (e) => console.error(e)})
  }

}
