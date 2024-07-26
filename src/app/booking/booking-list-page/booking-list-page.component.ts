import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list-page',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl:'./booking-list-page.component.html',
  styleUrl: './booking-list-page.component.scss'
})
export class BookingListPageComponent { 

  users = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));


  constructor(private router:Router) {}

  onAddAdminUser() {
    let url = `home/(home:subscriber-add-page)`;
    this.router.navigateByUrl(url);
  }

  onEditAdminUser(userId:number) {

    let url = `admin-user-update-page?userId=${userId}`;
    this.router.navigateByUrl(url);
  }

}
