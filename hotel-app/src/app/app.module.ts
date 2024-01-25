import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';

import { RESERVATION_SERVICE } from './reservation/reservation.service';
import { ReservationServiceImpl } from './reservation/reservation.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule,
  ],
  providers: [{provide: RESERVATION_SERVICE, useClass: ReservationServiceImpl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
