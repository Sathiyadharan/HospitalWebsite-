import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DoctorHttpService } from '../../doctor.http.service.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctor-add-page',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, CommonModule],
  templateUrl: './doctor-add-page.component.html',
  styleUrls: ['./doctor-add-page.component.scss']
})
export class DoctorAddPageComponent {
  formData: any = {
    phone: '',
    emailId: ''
  };

  constructor(private router: Router, private doctorService: DoctorHttpService, private snackBar: MatSnackBar) {}

  submit() {
    console.log('Form Submitted!', this.formData);
  }

  createDoctor(): void {
    this.doctorService.createDoctor(this.formData)
      .subscribe({
        next: (response: any) => {
          console.log('Doctor created successfully:', response);
          let url = `home/(home:doctor-consult)`;  
          this.router.navigateByUrl(url, { state: { id: response.id, name: response.name } });
          this.snackBar.open('Doctor added successfully!', 'Close', {
            duration: 2000,
          });
        },
        error: (error: any) => {
          console.error('Error creating doctor:', error);
          this.snackBar.open('Error creating doctor. Please try again.', 'Close', {
            duration: 3000,
          });
        }
      });
  }

  Doctorconsult() {
    let url = 'home/(home:doctor-consult)';
    this.router.navigateByUrl(url);
  }
}
