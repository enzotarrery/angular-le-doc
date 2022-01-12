import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './shared/appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component';
import { PatientsComponent } from './shared/patients/patients.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
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
