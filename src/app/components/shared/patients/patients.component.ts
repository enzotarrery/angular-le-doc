import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients-component',
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
    this.patientsService.getPatients(this.search).subscribe((response) => {
      this.patients = response;
    });
  }
}
