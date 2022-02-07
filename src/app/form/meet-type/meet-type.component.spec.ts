import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTypeComponent } from './meet-type.component';

describe('MeetTypeComponent', () => {
  let component: MeetTypeComponent;
  let fixture: ComponentFixture<MeetTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
