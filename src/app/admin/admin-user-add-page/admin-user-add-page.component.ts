import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AdminHttpService } from '../../admin.http.service.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-user-add-page',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule,ReactiveFormsModule ,CommonModule],
  templateUrl: './admin-user-add-page.component.html',
  styleUrl: './admin-user-add-page.component.scss'
})
export class AdminUserAddPageComponent {

  formData: any = {
    phone: '',
    emailId: ''
  };

  submit() {
    console.log('Form Submitted!', this.formData);
  }

  constructor(private router: Router, private adminService:AdminHttpService,private snackBar: MatSnackBar,private fb: FormBuilder) {}

  


  createAdmin(): void {
    this.adminService.createAdmin(this.formData)
      .subscribe({
        next: (response: any) => {
          console.log('Admin created successfully:', response);
          this.snackBar.open('Admin added successfully!', 'Close', {
            duration: 2000, // duration in milliseconds

            
          });
          this.formData = {}; // Reset form data after successful creation
        },
        error: (error: any) => {
          console.error('Error creating admin:', error);
          this.snackBar.open('Error creating admin. Please try again.', 'Close', {
            duration: 3000, // duration in milliseconds
          });
        }
      });
  }

  
  
  

  


}
