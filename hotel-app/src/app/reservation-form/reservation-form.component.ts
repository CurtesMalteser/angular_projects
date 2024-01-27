import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { RESERVATION_SERVICE } from '../reservation/reservation.service';
import { ReservationService } from '../reservation/reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  reservationForm : FormGroup = new FormGroup({});

  #routeId = () : string | null => { return this.activatedRoute.snapshot.paramMap.get('id') }

  constructor(
    private formBuilder: FormBuilder,
    @Inject(RESERVATION_SERVICE) private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
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

      this.#fillFormByRouteID()
    }

    onSubmit() {
       if (this.reservationForm.valid) {
        const reservation = this.reservationForm.value
        const id = this.#routeId()
        if(id) {
          this.reservationService.updateReservation(id, reservation)
        } else {
          this.reservationService.addReservation(reservation)
        }
        this.router.navigate(['/reservations'])
      }
    }

    #fillFormByRouteID() {
      const id = this.activatedRoute.snapshot.paramMap.get('id')
      if(id) {
        this.reservationService.getReservation(id).subscribe({
          next: (reservation) => this.reservationForm.patchValue(reservation),
          error: (e) => console.error(e)
        })
      } 
    }
  }
