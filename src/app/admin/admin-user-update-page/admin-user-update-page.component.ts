import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminHttpService } from '../../admin.http.service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminsDto } from '../dto/admin.dto';
import { Any } from 'typeorm';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-admin-user-update-page',
  standalone: true,
  imports: [CommonModule, FormsModule,MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule,ReactiveFormsModule ,CommonModule],
  templateUrl: './admin-user-update-page.component.html',
  styleUrls: ['./admin-user-update-page.component.scss']
})
export class AdminUserUpdatePageComponent {
  admins: any ={
    name: '',
    dob: '',
    address: '',
    emailId: '',
    phone: ''
  };
  adminId!:any;
  
 

  constructor(private router: Router, private adminService: AdminHttpService,private snackBar: MatSnackBar) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.admins = navigation.extras.state['admin'];
      
      console.log(this.admins);
    }
  }


  backtoadminlist(): void {
    this.router.navigate(['/home', { outlets: { home: ['admin-user-list-page'] } }]);
  }

  




  updateAdmin(id: number): void {
    this.adminService.updateAdmin(id, this.admins)
      .subscribe({
        next: response => {
          console.log('Admin Edited successfully:', response);
          
        },
        error: error => {
          console.error('Error Editing Admin:', error);
        }
      });
      this.snackBar.open('Admin added successfully!', 'Close', {
        duration: 2000, // duration in milliseconds

        
      });
  }
}



