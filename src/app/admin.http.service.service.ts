import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminsDto } from './admin/dto/admin.dto';
import { Admin } from 'typeorm';


@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {
 

 
  private apiUrl = 'http://localhost:3000/admin';
 
  
  private baseUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {}



  createAdmin(adminData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, adminData);
  }


  
  

  




  private adminData: BehaviorSubject<AdminsDto[]> = new BehaviorSubject<AdminsDto[]>([]);
  private adminData$: Observable<AdminsDto[]> = this.adminData.asObservable();

  public sendAdminData(data: AdminsDto[]) {
    this.adminData.next(data);
  }

  public getAdminData() {
    return this.adminData$;
  }

 


  public searchAdmin(searchText: string) {
    let url = `http://localhost:3000/admin`;
    if (searchText && searchText.length > 0) {
      url += `?searchText=${searchText}`;
    }

    this.http.get<AdminsDto[]>(url).subscribe(apiResponseData => {
      this.sendAdminData(apiResponseData);
    });
  }


  updateAdmin(id: number, admin: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch(url, admin);
  }


  onedit(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }










 
  
}
