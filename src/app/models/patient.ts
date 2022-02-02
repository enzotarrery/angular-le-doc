import { Document } from './document';
import { Treatment } from './treatment';

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  gender: number | string;
  allergies: string;
  height: string;
  weight: number;
  lastIncome: string;
  lastSubject: string;
  bloodGroup: number | string;
  socialNumber: string;
  notes: string;
  documents: Document[];
  treatments: Treatment[];
}
