import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() appointment!: Appointment;
}
