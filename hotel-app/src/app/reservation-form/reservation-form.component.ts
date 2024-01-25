import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { RESERVATION_SERVICE } from '../reservation/reservation.service';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{

  constructor(
    @Inject(RESERVATION_SERVICE) private reservationService: ReservationService,
    ) {

    }

    ngOnInit(): void {
      console.log(this.reservationService.helloService)
    }

}
