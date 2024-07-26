import { Component } from '@angular/core';
import { patientHttpServiceService } from '../../patient.http.service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscriber-update-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './subscriber-update-page.component.html',
  styleUrl: './subscriber-update-page.component.scss'
})
export class SubscriberUpdatePageComponent {


  
  subscriber: any = {
    name: '',
    dob: '',
    address: '',
    emailId: '',
    phone: '',
    
  };

  subscriberId!: any;

  constructor(private router: Router, private patientService: patientHttpServiceService,private snackBar: MatSnackBar) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.subscriber = navigation.extras.state['subscriber'];
      console.log(this.subscriber);
    }
  }

  updatePatient(id: number): void {
    this.patientService.updatePatient(id, this.subscriber)
      .subscribe({
        next: response => {
          console.log('patient updated successfully:', response);
          this.snackBar.open('patient updated successfully!', 'Close', {
            duration: 2000, // duration in milliseconds
          });
        },
        error: error => {
          console.error('Error updating doctor:', error);
          this.snackBar.open('Error updating patient. Please try again.', 'Close', {
            duration: 3000, // duration in milliseconds
          });
        }
      });
  }


  backtosublist():void{
    this.router.navigate(['/home', { outlets: { home: ['subscriber-list-page'] } }]);

  }

}
