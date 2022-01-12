import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.appointmentsService.getAppointments().subscribe((response) => {
      this.appointments = response;
    });
  }
}
