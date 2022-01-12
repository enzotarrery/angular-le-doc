import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsComponent } from './shared/patients/patients.component';
import { PatientTypeComponent } from './form/patient-type/patient-type.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentsComponent } from './shared/appointments/appointments.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { OptionsComponent } from './options/options.component';
import { StatisticComponent } from './statistic/statistic.component';
import { formatDate } from '@angular/common';
import { StatisticsComponent } from './shared/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientComponent,
    PatientsComponent,
    PatientTypeComponent,
    AppointmentComponent,
    AppointmentsComponent,
    OptionsComponent,
    StatisticComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
