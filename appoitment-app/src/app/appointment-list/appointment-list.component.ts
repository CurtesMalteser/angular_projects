import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  #appoitmentsKey = "appointments"

  newAppointmentTitle = ""
  newAppointmentDate = new Date()

  appointments: Appointment[] = []

  ngOnInit(): void {
    this.appointments = this.#getAppointments()
  }

  addAppointment() {
    if(this.#isValidTitle() && this.newAppointmentDate) {
      let newAppointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      }

      this.appointments.push(newAppointment)

      this.#clearInputFields()
      this.#storeAppointments()
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1)
    this.#storeAppointments()
  }

  #isValidTitle(): boolean { return this.newAppointmentTitle.trim().length > 0 }

  #clearInputFields(){
    this.newAppointmentTitle = ""
    this.newAppointmentDate = new Date()
  }

  #storeAppointments() {
    localStorage.setItem(this.#appoitmentsKey, JSON.stringify(this.appointments))
  }

  #getAppointments(): Appointment[] {
    const json = localStorage.getItem(this.#appoitmentsKey)
    let appointments = []
    
    if(typeof json === 'string') {
     appointments = JSON.parse(json)
    }

    return appointments
  }

}
