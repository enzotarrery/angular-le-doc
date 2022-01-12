import { Patient } from './patient';

export interface Appointment {
  date: string;
  subject: string;
  patient: Patient;
}
