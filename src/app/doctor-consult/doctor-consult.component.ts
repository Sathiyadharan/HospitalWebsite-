import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorHttpService } from '../doctor.http.service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { AppointmentHttpServiceService } from '../appointment.http.service.service';
import { appointmentDto } from './dto/appointment.dto';

interface DayConsultation {
  day: string;
  session: string;
  startingtime: string;
  endingtime: string;
  doctor: string;
  name:string;
};

@Component({
  selector: 'app-doctor-consult',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-consult.component.html',
  styleUrls: ['./doctor-consult.component.scss']
})
export class DoctorConsultComponent {


  isFormValid: boolean = true;

  formData: DayConsultation[] = [
    { day: 'Monday', session: 'Morning', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Monday', session: 'Afternoon', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Monday', session: 'Evening', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Tuesday', session: 'Morning', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Tuesday', session: 'Afternoon', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Tuesday', session: 'Evening', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Wednesday', session: 'Morning', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Wednesday', session: 'Afternoon', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Wednesday', session: 'Evening', startingtime: '', endingtime: '', doctor: '',name: '' },
    { day: 'Thursday', session: 'Morning', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Thursday', session: 'Afternoon', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Thursday', session: 'Evening', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Friday', session: 'Morning', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Friday', session: 'Afternoon', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Friday', session: 'Evening', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Saturday', session: 'Morning', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Saturday', session: 'Afternoon', startingtime: '', endingtime: '', doctor: '', name: '' },
    { day: 'Saturday', session: 'Evening', startingtime: '', endingtime: '', doctor: '', name: '' }
  ];

  constructor(
    private router: Router,
    private doctorService: DoctorHttpService,
    private snackBar: MatSnackBar,
    private appointmentService: AppointmentHttpServiceService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const id = navigation.extras.state['id'];
      const name = navigation.extras.state['name'];
      if (id) {
        this.formData.forEach(item => {
          item.doctor = id;
        });
      }
      if (name) {
        this.formData.forEach(item => {
          item.name = name;
        });
      }
    }
  }

  onsubmit(): void {
    this.isFormValid = true;
    if (this.allFieldsEmpty()) {
      this.isFormValid = false;
      this.snackBar.open('Consultation fields are empty', 'Close', {
        duration: 2000,
      });
      return;
    }

    const formattedData = this.formatConsultationData(this.formData);

    this.appointmentService.createAppoitment(formattedData).subscribe({
      next: response => {
        console.log('Consultation created successfully:', response);
        let url = `home/(home:doctor-list-page)`;  
        this.snackBar.open('Consultation added successfully!', 'Close', {
          duration: 2000,
        });
      },
      error: (error: any) => {
        console.error('Error creating consultation:', error);
        this.snackBar.open('Error creating consultation. Please try again.', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  private allFieldsEmpty(): boolean {
    return this.formData.every(field => !field.startingtime && !field.endingtime);
  }

  private formatConsultationData(formData: DayConsultation[]): { data: DayConsultation[] } {
    return { data: formData };
  }
}
