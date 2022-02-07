import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-meets-view',
  templateUrl: './meets.component.html',
  styleUrls: ['./meets.component.scss'],
})
export class MeetsView implements OnInit {
  meets: Appointment[] = [];

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.appointmentsService.getAppointments().subscribe((response) => {
      this.meets = response;
    });
  }
}
