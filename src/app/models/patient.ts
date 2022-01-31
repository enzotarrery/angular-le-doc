export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  gender: number;
  allergies: string;
  height: string;
  weight: number;
  lastIncome: string;
  lastSubject: string;
  bloodGroup: number;
  socialNumber: string;
  notes: string;
  documents: Document[];
}
