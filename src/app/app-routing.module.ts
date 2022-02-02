import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './shared/appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component';
import { PatientsComponent } from './shared/patients/patients.component';
import { PatientTypeComponent } from './form/patient-type/patient-type.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'patients',
    children: [
      {
        path: '',
        component: PatientsComponent,
      },
      {
        path: 'add',
        component: PatientTypeComponent,
      },
      {
        path: ':id',
        component: PatientComponent,
      },
      {
        path: ':id/edit',
        component: PatientTypeComponent,
        data: {
          edit: true,
        },
      },
    ],
  },
  {
    path: 'visites',
    component: AppointmentsComponent,
  },
  {
    path: 'options',
    component: OptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
