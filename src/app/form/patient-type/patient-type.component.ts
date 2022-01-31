import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patient-type',
  templateUrl: './patient-type.component.html',
  styleUrls: ['./patient-type.component.scss'],
})
export class PatientTypeComponent implements OnInit {
  form!: FormGroup;
  isEdited: boolean = false;
  actionLabel: string = 'Ajouter un patient';

  constructor(
    private patientsService: PatientsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.route.snapshot.data['edit']) {
      this.getData();
      this.checkEdit();
    }
  }

  initForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      socialNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{15}$/)],
      ],
      bloodGroup: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(8),
          Validators.maxLength(1),
        ],
      ],
      height: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(3)],
      ],
      weight: [
        '',
        [Validators.required, Validators.min(50), Validators.max(250)],
      ],
      allergies: ['', [Validators.maxLength(150)]],
      notes: ['', [Validators.maxLength(250)]],
    });
  }

  checkEdit(): void {
    if (this.route.snapshot.data['edit']) this.isEdited = true;
    this.actionLabel = 'Modifier un patient';
  }

  getData(): void {
    this.patientsService
      .getPatient(this.route.snapshot.paramMap.get('id'))
      .subscribe((response) => {
        this.form.patchValue(response);
      });
  }

  add(): void {
    this.patientsService.addPatient(this.form.value).subscribe((response) => {
      this.router.navigate(['/patients']);
    });
  }

  update(): void {
    this.patientsService
      .updatePatient(this.route.snapshot.paramMap.get('id'), this.form.value)
      .subscribe((response) => {
        this.router.navigate(['/patients']);
      });
  }

  delete(): void {
    this.patientsService
      .deletePatient(this.route.snapshot.paramMap.get('id'))
      .subscribe((response) => {
        this.router.navigate(['/patients']);
      });
  }
}
