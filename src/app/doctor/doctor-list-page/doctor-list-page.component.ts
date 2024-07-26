import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { DoctorHttpService } from '../../doctor.http.service.service';
import { DoctorsDto } from '../../dto/doctor.dto';
import { FilterPipe } from '../../filter.pipe';
import { AppointmentHttpServiceService } from '../../appointment.http.service.service';

@Component({
  selector: 'app-doctor-list-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FilterPipe
    
  ],
  templateUrl: './doctor-list-page.component.html',
  styleUrls: ['./doctor-list-page.component.scss']
})
export class DoctorListPageComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  searchText: string = '';
  doctors: DoctorsDto[] = [];

  constructor(private doctorService: DoctorHttpService, private router: Router, private appointmentservice:AppointmentHttpServiceService) {}

  searchtext:any;

  ngOnInit(): void {
    this.doctorService.getDoctorData().pipe(takeUntil(this.unsubscribe$)).subscribe(inputData => {
      this.doctors = inputData;
    });

    this.doctorService.searchDoctor(this.searchText);
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('ngOnDestroy');
  }

  onSearchTextChange() {
    this.doctorService.searchDoctor(this.searchText);
  }

  onAddAdminUser() {
    let url = 'home/(home:doctor-add-page)';
    this.router.navigateByUrl(url);
  }


  onEditdoctor(id:number){
    console.log('Selected Doctor:', id);
    this.doctorService.onEditdoctor(id).subscribe(
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

  onview(id: number) {
    console.log('Selected Doctor:', id);
    this.doctorService.onEditdoctor(id).subscribe({
      next: (response) => {
        console.log('Doctor selected successfully:', response);
        let url = `home/(home:view)`;
        this.router.navigateByUrl(url, { state: { id: response.id, name: response.name } });
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
