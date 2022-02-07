import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  constructor(private httpClient: HttpClient) {}

  getAppointments(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/meets');
  }

  getAppointment(id: string | null): Observable<any> {
    return this.httpClient.get('http://localhost:3000/meets/' + id);
  }

  addAppointment(data: Appointment): Observable<any> {
    return this.httpClient.post('http://localhost:3000/meets', data);
  }

  updateAppointment(id: string | null, data: Appointment): Observable<any> {
    return this.httpClient.put('http://localhost:3000/meets/' + id, data);
  }

  deleteAppointment(id: string | null): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/meets/' + id);
  }
}
