import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AdminHttpService } from '../../admin.http.service.service'; // Update path if needed
import { AdminsDto } from '../dto/admin.dto';
import { Admin } from 'typeorm';
import { FilterPipe } from '../../filter.pipe';






@Component({
  selector: 'app-admin-user-list-page', // Update selector
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    FilterPipe
  ],

  templateUrl: './admin-user-list-page.component.html', // Update template URL
  styleUrls: ['./admin-user-list-page.component.scss'] // Update style URL
})
export class AdminUserListPageComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  searchText: string = '';
  admins: AdminsDto[] = [];


  constructor(private adminService: AdminHttpService, private router: Router) {}

  ngOnInit(): void {
    this.adminService.getAdminData().pipe(takeUntil(this.unsubscribe$)).subscribe(inputData => {
      this.admins = inputData;
    });

    this.adminService.searchAdmin(this.searchText);
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('ngOnDestroy');
  }

  onSearchTextChange() {
    this.adminService.searchAdmin(this.searchText);
  }
  searchtext:any;

  onAddAdminUser() {
    let url = 'home/(home:admin-user-add-page)';
    this.router.navigateByUrl(url);
  }

 
  onEdit(id:number)
  {
    console.log('Selected Admin:', id);
    this.adminService.onedit(id).subscribe(
      {
        next:(response) => {
          console.log('Admin selected successfully:',response);
          let url = `home/(home:admin-user-update-page)`;  
          this.router.navigateByUrl(url, { state: { admin: response } });
        },
        error:(error) => {
          console.error('Failed to select admin:', error);
          
        }
      }
    );
  }

 

  
 

  trackById(index: number, admin: AdminsDto): number {
    return admin.id;
  }
}
