import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patient';
import { DictionaryService } from '../services/dictionary.service';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  patient!: Patient;
  repeats: { id: number; label: string }[] = [];

  constructor(
    private patientsService: PatientsService,
    private dictionaryService: DictionaryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.patientsService
      .getPatient(this.route.snapshot.paramMap.get('id'))
      .subscribe((response) => {
        this.patient = response;
        this.getGenderLabel();
        this.getBloodGroupLabel();
        this.getTreatmentData();
      });
  }

  getTreatmentData(): void {
    this.getDrugLabel();
    this.getRepeatsLabels();
    this.getDurationLabel();
    this.getRepeats();
  }

  getRepeats(): void {
    this.dictionaryService.getRepeats().subscribe((response) => {
      this.repeats = response;
    });
  }

  getGenderLabel(): void {
    this.dictionaryService.getGenders().subscribe((response) => {
      this.patient.gender = response.find(
        (gender: { id: number }) => gender.id === this.patient.gender
      ).label;
    });
  }

  getBloodGroupLabel(): void {
    this.dictionaryService.getBloodGroups().subscribe((response) => {
      this.patient.bloodGroup = response.find(
        (bloodGroup: { id: number }) =>
          bloodGroup.id === this.patient.bloodGroup
      ).label;
    });
  }

  getDrugLabel(): void {
    this.dictionaryService.getDrugs().subscribe((response) => {
      this.patient.treatments.forEach((treatment) => {
        treatment.drug = response.find(
          (drug: { id: number }) => drug.id === treatment.drug
        ).label;
      });
    });
  }

  getRepeatsLabels(): void {
    this.dictionaryService.getRepeats().subscribe((response) => {
      this.patient.treatments.forEach((treatment) => {
        treatment.repeat = treatment.repeat.map(
          (repeat) =>
            response.find(
              (responseRepeat: { id: number }) => responseRepeat.id === repeat
            ).label
        );
      });
    });
  }

  getDurationLabel(): void {
    this.dictionaryService.getPeriods().subscribe((response) => {
      this.patient.treatments.forEach((treatment) => {
        treatment.duration = response.find(
          (period: { id: number }) => period.id === treatment.duration
        ).label;
      });
    });
  }
}
