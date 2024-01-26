import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RESERVATION_SERVICE } from '../reservation/reservation.service';
import { ReservationServiceImpl } from '../reservation/reservation.service';

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [{provide: RESERVATION_SERVICE, useClass: ReservationServiceImpl }],
})
export class ReservationModule { }
