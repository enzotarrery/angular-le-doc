import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PatientComponent } from './views/patient/patient.component';
import { PatientsComponent } from './components/shared/patients/patients.component';
import { PatientsView } from './views/patients/patients.component';
import { PatientTypeComponent } from './form/patient-type/patient-type.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentsComponent } from './components/shared/appointments/appointments.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsView } from './views/options/options.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { formatDate } from '@angular/common';
import { StatisticsComponent } from './components/shared/statistics/statistics.component';
import { MeetsView } from './views/meets/meets.component';
import { MeetsComponent } from './components/meets/meets.component';
import { MeetComponent } from './components/meet/meet.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientComponent,
    PatientsComponent,
    PatientsView,
    PatientTypeComponent,
    AppointmentComponent,
    AppointmentsComponent,
    OptionsView,
    StatisticComponent,
    StatisticsComponent,
    MeetsView,
    MeetsComponent,
    MeetComponent,
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
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
