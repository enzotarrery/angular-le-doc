import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  search: string = '';

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.patientsService.getPatients().subscribe((response) => {
      this.patients = response;
      if (this.search != '') {
        this.patients = this.patients.filter((patient) => {
          return this.search
            .toLowerCase()
            .split(' ')
            .every((word) => {
              for (const [key, value] of Object.entries(patient)) {
                if (
                  (key === 'firstName' ||
                    key === 'lastName' ||
                    key === 'lastIncome' ||
                    key === 'lastSubject') &&
                  value.toLowerCase().includes(word)
                )
                  return value.toLowerCase().includes(word);
              }
            });
        });
      }
    });
  }
}
