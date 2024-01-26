import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { RESERVATION_SERVICE } from '../reservation/reservation.service';
import { ReservationService } from '../reservation/reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  reservationForm : FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    @Inject(RESERVATION_SERVICE) private reservationService: ReservationService,
    private router: Router,
    ) {

    }

    ngOnInit(): void {
      this.reservationForm = this.formBuilder.group({
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
        guestName: ['', Validators.required],
        guestEmail: ['', [Validators.required, Validators.email]],
        roomNumber: ['', Validators.required],
      })
    }

    onSubmit() {
       if (this.reservationForm.valid) {
        const reservation = this.reservationForm.value
        this.reservationService.addReservation(reservation)
        this.router.navigate(['/reservations'])
      }
    }
}
