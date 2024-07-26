import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { DoctorHttpService } from '../doctor.http.service.service';

interface Doctor {
  name: string;
  specialization: string;
  emailId: string;
}

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {
  formData: Doctor = {
    name: '',
    specialization: '',
    emailId: ''
  };

  patientData: any = {
    name: '',
    age: '',
    email: '',
    phone: '',
    address: ''
  };
 

  appointmentDate: string = '';
  appointmentTime: string = '';

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private doctorService: DoctorHttpService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.patientData = navigation.extras.state['patient'] || this.patientData;
      const doctorData = navigation.extras.state['doctor'] || {};
      this.formData = {
        name: doctorData.name || '',
        specialization: doctorData.specialization || '',
        emailId: doctorData.emailId || ''
      };
    }
  }

  ngOnInit(): void {}

  onTimeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.appointmentTime = target.value;
  }

  bookAppointment() {
    // Implementation for booking appointment
  }

 
}
