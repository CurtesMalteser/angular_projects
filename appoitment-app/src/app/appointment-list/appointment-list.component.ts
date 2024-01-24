import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  newAppointmentTitle = ""
  newAppointmentDate = new Date()

  appointments: Appointment[] = []

  addAppointment() {
    if(this.#isValidTitle() && this.newAppointmentDate) {
      let newAppointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      }

      this.appointments.push(newAppointment)

      this.#clearInputFields()
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1)
  }

  #isValidTitle(): boolean { return this.newAppointmentTitle.trim().length > 0 }

  #clearInputFields(){
    this.newAppointmentTitle = ""
    this.newAppointmentDate = new Date()
  }

}
