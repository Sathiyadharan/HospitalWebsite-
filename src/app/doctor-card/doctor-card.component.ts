import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorHttpService } from '../doctor.http.service.service';
import { DoctorsDto } from '../dto/doctor.dto';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FilterPipe],
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  doctors: DoctorsDto[] = [];
  searchtext: any;

 

  patientData: any = {}; // To hold patient data passed from SubscriberListPageComponent

  constructor(private doctorService: DoctorHttpService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.patientData = navigation.extras.state['patient'] || {};
    }
  }

  ngOnInit(): void {
    this.doctorService.getDoctorData().pipe(takeUntil(this.unsubscribe$)).subscribe(inputData => {
      this.doctors = inputData;
    });

    this.doctorService.searchDoctor(this.searchtext);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSearchTextChange() {
    this.doctorService.searchDoctor(this.searchtext);
  }

  onAddAdminUser() {
    let url = 'home/(home:doctor-add-page)';
    this.router.navigateByUrl(url);
  }

  onEditdoctor(id: number) {
    this.doctorService.onEditdoctor(id).subscribe({
      next: (response) => {
        let url = `home/(home:booking-page)`;
        this.router.navigateByUrl(url, { state: { doctor: response, patient: this.patientData } });
      },
      error: (error) => {
        console.error('Failed to select doctor:', error);
      }
    });
  }

  trackById(index: number, doctor: DoctorsDto): number {
    return doctor.id;
  }
}
