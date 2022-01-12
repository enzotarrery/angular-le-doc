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
      icon: 'home',
    },
    {
      path: 'patients',
      name: 'Patients',
      icon: 'group',
    },
    {
      path: 'visites',
      name: 'Rendez-vous',
      icon: 'directions_car',
    },
    {
      path: 'options',
      name: 'Paramètres',
      icon: 'settings',
    },
  ];
}
