import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorHttpService } from '../../doctor.http.service.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctor-update-page',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './doctor-update-page.component.html',
  styleUrls: ['./doctor-update-page.component.scss']
  
})
export class DoctorUpdatePageComponent {

  doctors: any = {
    name: '',
    dob: '',
    address: '',
    emailId: '',
    phone: '',
    liscenseno: '',
    specialization: ''
  };

  doctorId!: any;

  constructor(private router: Router, private doctorService: DoctorHttpService,private snackBar: MatSnackBar) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.doctors = navigation.extras.state['doctor'];
      console.log(this.doctors);
    }
  }

  backtoadminlist(): void {
    this.router.navigate(['/home', { outlets: { home: ['doctor-list-page'] } }]);
  }


  updateDoctor(id: number): void {
    this.doctorService.updateAdmin(id, this.doctors)
      .subscribe({
        next: response => {
          console.log('Doctor updated successfully:', response);
          this.snackBar.open('Doctor updated successfully!', 'Close', {
            duration: 2000, // duration in milliseconds
          });
        },
        error: error => {
          console.error('Error updating doctor:', error);
          this.snackBar.open('Error updating doctor. Please try again.', 'Close', {
            duration: 3000, // duration in milliseconds
          });
        }
      });
  }
  
}
