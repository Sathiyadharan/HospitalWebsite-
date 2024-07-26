import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouteModule } from 'next/dist/server/future/route-modules/route-module';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule ,RouterModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  [x: string]: any;


  onlogin(){

    let url = 'main-nav';
    this['router'].navigateByUrl(url);
    
  }
 
  



 
    

}
