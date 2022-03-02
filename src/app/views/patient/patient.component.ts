import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DictionaryData } from '../../models/dictionary-data';
import { Patient } from '../../models/patient';
import { DictionaryService } from '../../services/dictionary.service';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  patient!: Patient;
  form!: FormGroup;
  drugs: DictionaryData[] = [];
  repeats: DictionaryData[] = [];
  durations: DictionaryData[] = [];
  labels = {
    gender: '',
    bloodGroup: '',
  };
  treatmentGroup: FormGroup = this.fb.group({
    drug: ['', [Validators.required]],
    repeat: [''],
    duration: ['', [Validators.required]],
  });

  constructor(
    private patientsService: PatientsService,
    private dictionaryService: DictionaryService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getData();
  }

  initForm(): void {
    this.form = this.fb.group({
      treatments: this.fb.array([]),
    });
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
    /* We loop on the patient's treatments */
    this.patient.treatments.forEach((treatment) => {
      this.addRow();
    });

    /* Then we patch the value to the form */
    this.form.patchValue(this.patient);

    /* We get the choices for a treatment to add */
    this.getDrugs();
    this.getRepeats();
    this.getDurations();
  }

  get treatmentsForms(): FormArray {
    return this.form.get('treatments') as FormArray;
  }

  getDrugs(): void {
    this.dictionaryService.getDrugs().subscribe((response) => {
      this.drugs = response;
    });
  }

  getRepeats(): void {
    this.dictionaryService.getRepeats().subscribe((response) => {
      this.repeats = response;
    });
  }

  getDurations(): void {
    this.dictionaryService.getDurations().subscribe((response) => {
      this.durations = response;
    });
  }

  getGenderLabel(): void {
    this.dictionaryService.getGenders().subscribe((response) => {
      this.labels.gender = response.find(
        (gender: { id: number }) => gender.id === this.patient.gender
      ).label;
    });
  }

  getBloodGroupLabel(): void {
    this.dictionaryService.getBloodGroups().subscribe((response) => {
      this.labels.bloodGroup = response.find(
        (bloodGroup: { id: number }) =>
          bloodGroup.id === this.patient.bloodGroup
      ).label;
    });
  }

  archive(): void {
    this.patientsService
      .deletePatient(this.route.snapshot.paramMap.get('id'))
      .subscribe((response) => {
        this.router.navigate(['/patients']);
      });
  }

  addRow(): void {
    this.treatmentsForms.push(this.treatmentGroup);
  }

  deleteRow(index: number): void {
    this.treatmentsForms.removeAt(index);
  }
}
