import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private httpClient: HttpClient) {}

  getPatients(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/patients');
  }

  getPatient(id: string | null): Observable<any> {
    return this.httpClient.get('http://localhost:3000/patients/' + id);
  }

  addPatient(data: Patient): Observable<any> {
    return this.httpClient.post('http://localhost:3000/patients', data);
  }

  updatePatient(id: string | null, data: Patient): Observable<any> {
    return this.httpClient.put('http://localhost:3000/patients/' + id, data);
  }

  deletePatient(id: string | null): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/patients/' + id);
  }
}
