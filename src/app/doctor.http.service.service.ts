import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DoctorsDto } from './dto/doctor.dto';

@Injectable({
  providedIn: 'root'
})
export class DoctorHttpService {

  updateAdmin(id: number, doctor: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.patch(url, doctor);
  }
  private baseUrl = 'http://localhost:3000/doctors';

  private apiUrl = 'http://localhost:3000/doctors';

  constructor(private httpClient: HttpClient) {}

  createDoctor(doctorData: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, doctorData);
  }


  private doctorData: BehaviorSubject<DoctorsDto[]> = new BehaviorSubject<DoctorsDto[]>([]);
  private doctorData$: Observable<DoctorsDto[]> = this.doctorData.asObservable();

  public sendDoctorData(data: DoctorsDto[]) {
    this.doctorData.next(data);
  }

  public getDoctorData() {
    return this.doctorData$;
  }

  public searchDoctor(searchText: string) {
    let url = `http://localhost:3000/doctors`;
    if (searchText && searchText.length > 0) {
      url += `?searchText=${searchText}`;
    }

    this.httpClient.get<DoctorsDto[]>(url).subscribe(apiResponseData => {
      this.sendDoctorData(apiResponseData);
    });
  }


  onEditdoctor(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  onEditDoctor(id: number): Observable<DoctorsDto> {
    return this.httpClient.get<DoctorsDto>(`/api/doctors/${id}`);
  }

  getDoctors(): Observable<DoctorsDto[]> {
    return this.httpClient.get<DoctorsDto[]>('/api/doctors');
  }



}
