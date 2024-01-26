import { Component, Inject, OnInit } from '@angular/core';
import { RESERVATION_SERVICE, ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  private reservations: Reservation[] = []

  constructor(
    @Inject(RESERVATION_SERVICE) private reservationService: ReservationService,
  ) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations()
    console.log(this.reservations)
  }

}
