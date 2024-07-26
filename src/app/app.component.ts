import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { Menus } from './types/base.type';
import { HttpClientModule } from '@angular/common/http';
import { AdminHttpService } from './admin.http.service.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSidenavModule,MatListModule, RouterOutlet, RouterModule , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'hospital-admin-ng-cli';


}
