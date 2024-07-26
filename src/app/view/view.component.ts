import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentHttpServiceService } from '../appointment.http.service.service';
import { appointmentDto } from '../doctor-consult/dto/appointment.dto';

@Component({
    selector: 'app-view',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    formData: appointmentDto[] = [];
    doctorId: string = '';
    doctorName: string = '';

    constructor(
        private router: Router,
        private snackBar: MatSnackBar,
        private appointmentService: AppointmentHttpServiceService
    ) {
        const navigation = this.router.getCurrentNavigation();
        if (navigation && navigation.extras.state) {
            this.doctorId = navigation.extras.state['id'];
            this.doctorName = navigation.extras.state['name'];
        }
    }

    ngOnInit(): void {
        if (this.doctorId) {
            this.loadConsultationTimes();
        } else {
            console.error('Doctor ID is missing');
        }
    }

    loadConsultationTimes(): void {
        this.appointmentService.getConsultationTimes(this.doctorId).subscribe(
            (data) => {
                this.formData = data.map(item => ({ ...item, doctor: this.doctorName }));  // Ensure doctor name is assigned
                console.log('Consultation times loaded successfully:', this.formData);
            },
            (error) => {
                console.error('Failed to load consultation times:', error);
                this.snackBar.open('Failed to load consultation times', 'Close', { duration: 3000 });
            }
        );
    }

    updateConsultations(): void {
        this.appointmentService.updateConsultationTimes(this.doctorId, this.formData).subscribe({
            next: response => {
                console.log('Consultation times updated successfully:', response);
                this.snackBar.open('Consultation times updated successfully!', 'Close', {
                    duration: 2000, // duration in milliseconds
                });
            },
            error: error => {
                console.error('Error updating consultation times:', error);
                this.snackBar.open('Error updating consultation times. Please try again.', 'Close', {
                    duration: 3000, // duration in milliseconds
                });
            }
        });
    }
}
