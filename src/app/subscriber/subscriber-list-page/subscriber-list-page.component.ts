import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { patientHttpServiceService } from '../../patient.http.service.service';
import { patientDto } from '../dto/patient.dto';
import { FilterPipe } from '../../filter.pipe';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorHttpService } from '../../doctor.http.service.service';
import { DoctorsDto } from '../../dto/doctor.dto';

@Component({
  selector: 'app-subscriber-list-page',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, CommonModule,FilterPipe],
  templateUrl: './subscriber-list-page.component.html',
  styleUrls: ['./subscriber-list-page.component.scss']
})
export class SubscriberListPageComponent  implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  searchText: string = '';
  patients:patientDto[] = [];



  constructor(private patientService: patientHttpServiceService, private router: Router,private snackBar: MatSnackBar) {}

  searchtext:any;

  ngOnInit(): void {
    this.patientService.getPatientData().pipe(takeUntil(this.unsubscribe$)).subscribe(inputData => {
      this.patients = inputData;
    });

    this.patientService.searchPatient(this.searchText);
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('ngOnDestroy');
  }

  onSearchTextChange() {
    this.patientService.searchPatient(this.searchText);
  }

  onAddAdminUser() {
    let url = 'home/(home:subscriber-add-page)';
    this.router.navigateByUrl(url);
  }



 
  onEditpatient(id: number) {
    this.patientService.onEditpatient(id).subscribe({
      next: (response) => {
        let url = 'home/(home:doctor-card)';
        this.router.navigateByUrl(url, { state: { patient: response } });
      },
      error: (error) => {
        console.error('Failed to select patient:', error);
        this.snackBar.open('Failed to select patient', 'Close', { duration: 3000 });
      }
    });
  }

  
  

  oneditpatient(id:number){
    console.log('Selected subscriber:', id);
    this.patientService.onEditpatient(id).subscribe(
      {
        next:(response) => {
          console.log('Admin selected successfully:',response);
          let url = `home/(home:doctor-update-page)`;  
          this.router.navigateByUrl(url, { state: { doctor: response } });
        },
        error:(error) => {
          console.error('Failed to select admin:', error);
          
        }
      }
    );

  }

 
  

 
  trackById(index: number, patient: patientDto): number {
    return patient.id;
  }
}
