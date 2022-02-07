import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './components/shared/appointments/appointments.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OptionsView } from './views/options/options.component';
import { PatientsComponent } from './components/shared/patients/patients.component';
import { PatientTypeComponent } from './form/patient-type/patient-type.component';
import { PatientComponent } from './views/patient/patient.component';
import { PatientsView } from './views/patients/patients.component';
import { MeetsView } from './views/meets/meets.component';

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
        component: PatientsView,
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
    component: MeetsView,
  },
  {
    path: 'options',
    component: OptionsView,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
