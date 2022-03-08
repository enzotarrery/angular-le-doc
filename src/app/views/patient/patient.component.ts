import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Treatment } from 'src/app/models/treatment';
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
    treatments: [] as Treatment[],
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
        /* We fetch the patient's data */
        this.patient = response;

        /* Then convert some to their label */
        this.getGenderLabel();
        this.getBloodGroupLabel();

        /* And we get the treatment data */
        this.getTreatmentData();
      });
  }

  getTreatmentData(): void {
    /* We clone the patient's treatments for the label conversion */
    this.labels.treatments = this.patient.treatments;

    /* We get the choices for a treatment to add */
    this.getDrugs();
    this.getRepeats();
    this.getDurations();

    /* We convert the treatments label too */
    this.getTreatmentsLabels();
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

  getDrugLabel(): void {
    this.dictionaryService.getDrugs().subscribe((response) => {
      this.labels.treatments.forEach((treatment) => {
        treatment.drug = response.find(
          (drug: { id: number }) => drug.id === treatment.drug
        ).label;
      });
    });
  }

  getRepeatsLabels(): void {
    this.dictionaryService.getRepeats().subscribe((response) => {
      this.labels.treatments.forEach((treatment) => {
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
    this.dictionaryService.getDurations().subscribe((response) => {
      this.labels.treatments.forEach((treatment) => {
        treatment.duration = response.find(
          (duration: { id: number }) => duration.id === treatment.duration
        ).label;
      });
    });
  }

  getTreatmentsLabels(): void {
    this.getDrugLabel();
    this.getRepeatsLabels();
    this.getDurationLabel();
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

  addTreatment(index: number): void {
    /* The treatment to be added */
    let treatment = this.form.value.treatments[index];

    /* The treatment is added */
    this.patient.treatments.push(treatment);

    /* The patient's data is updated */
    this.patientsService
      .updatePatient(this.patient.id, this.patient)
      .subscribe((reponse) => {
        this.deleteRow(index);
      });
  }

  deleteTreatment(index: number): void {
    this.patient.treatments.splice(index, 1);

    this.patientsService
      .updatePatient(this.patient.id, this.patient)
      .subscribe((reponse) => {});
  }
}
