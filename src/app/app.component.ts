import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes = [
    {
      path: '/',
      name: 'Home',
      icon: 'dvr_24px_outlined.svg',
    },
    {
      path: 'patients',
      name: 'Patients',
      icon: 'group_24px_outlined.svg',
    },
    {
      path: 'visites',
      name: 'Rendez-vous',
      icon: 'drive_eta_24px_outlined.svg',
    },
  ];
}
