import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { patientHttpServiceService } from '../../patient.http.service.service';

@Component({
  selector: 'app-subscriber-add-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subscriber-add-page.component.html',
  styleUrls: ['./subscriber-add-page.component.scss'] 
})
export class SubscriberAddPageComponent {
 
  formData: any = {
    phone: '',
    emailId: ''
  };

  submit() {
    console.log('Form Submitted!', this.formData);
  }
  

  constructor(
    private router: Router, 
    private patientService: patientHttpServiceService, 
    private snackBar: MatSnackBar
  ) {}

  createPatient(): void {
    this.patientService.createPatient(this.formData)
      .subscribe({
        next: (response: any) => {
          console.log('Patient created successfully:', response);
          this.snackBar.open('Patient added successfully!', 'Close', {
            duration: 2000,
          });
          this.formData = {}; // Reset form data after successful creation
        },
        error: (error: any) => {
          console.error('Error creating patient:', error);
          this.snackBar.open('Error creating patient. Please try again.', 'Close', {
            duration: 3000,
          });
        }
      });
  }

 
}
