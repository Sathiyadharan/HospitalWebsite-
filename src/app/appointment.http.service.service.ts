import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { appointmentDto } from './doctor-consult/dto/appointment.dto';

@Injectable({
  providedIn: 'root'
})
export class AppointmentHttpServiceService {
  create_consultations(formattedData: { data: appointmentDto[]; }) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:3000/appointment';

  private apiUrl = 'http://localhost:3000/appointment';

  constructor(private httpClient: HttpClient) {}

  
  
 
  createAppoitment(appointmentData: { data: appointmentDto[] }): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, appointmentData);
  }

 


  getAppointmentsByDoctorId(doctorId: string): Observable<appointmentDto[]> {
    return this.httpClient.get<appointmentDto[]>(`${this.baseUrl}/appointments/doctor/${doctorId}`);
  }

  getConsultationTimes(doctorId: string): Observable<appointmentDto[]> {
    const url = `${this.baseUrl}/appointments/doctor/${doctorId}`;
    return this.httpClient.get<appointmentDto[]>(url);
  }
  
  updateConsultationTimes(doctorId: string, data: appointmentDto[]): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/consultations/${doctorId}`, data);
}
  
  
  
  private appointmentData: BehaviorSubject<appointmentDto[]> = new BehaviorSubject<appointmentDto[]>([]);
  private appointmentData$: Observable<appointmentDto[]> = this.appointmentData.asObservable();

  public sendAppointmentData(data: appointmentDto[]) {
    this.appointmentData.next(data);
  }

  public getAppointmentData() {
    return this.appointmentData$;
  }

  public searchPatient(searchText: string) {
    let url = `http://localhost:3000/appointment `;
    if (searchText && searchText.length > 0) {
      url += `?searchText=${searchText}`;
    }

    this.httpClient.get<appointmentDto[]>(url).subscribe(apiResponseData => {
      this.sendAppointmentData(apiResponseData);
    });
  }

  onview(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }


 
  onEditpatient(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }


 

}
