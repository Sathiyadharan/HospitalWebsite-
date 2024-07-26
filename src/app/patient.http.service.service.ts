import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { patientDto } from './subscriber/dto/patient.dto';
import { DoctorsDto } from './dto/doctor.dto';

@Injectable({
  providedIn: 'root'
})
export class patientHttpServiceService {
  updateAdmin(id: number, subscriber: any) {
    throw new Error('Method not implemented.');
  }

  updatePatient(id: number, doctor: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.patch(url, doctor);
  }
  private baseUrl = 'http://localhost:3000/patient';

  private apiUrl = 'http://localhost:3000/patient';

  constructor(private httpClient: HttpClient) {}

  createPatient(patientData: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, patientData);
  }

  getPatientById(id: number) {
    throw new Error('Method not implemented.');
  }

  private patientData: BehaviorSubject<patientDto[]> = new BehaviorSubject<patientDto[]>([]);
  private patientData$: Observable<patientDto[]> = this.patientData.asObservable();

  public sendPatientData(data: patientDto[]) {
    this.patientData.next(data);
  }

  public getPatientData() {
    return this.patientData$;
  }

  public searchPatient(searchText: string) {
    let url = `http://localhost:3000/patient`;
    if (searchText && searchText.length > 0) {
      url += `?searchText=${searchText}`;
    }

    this.httpClient.get<patientDto[]>(url).subscribe(apiResponseData => {
      this.sendPatientData(apiResponseData);
    });
  }


 
  onEditpatient(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

 
  getDoctorDetailsByPatientId(patientId: number): Observable<DoctorsDto> {
    return this.httpClient.get<DoctorsDto>(`${this.apiUrl}/doctors/patient/${patientId}`);
  }

  


}


