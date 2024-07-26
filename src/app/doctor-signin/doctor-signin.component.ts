import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-doctor-signin',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './doctor-signin.component.html',
  styleUrl: './doctor-signin.component.scss'
})
export class DoctorSigninComponent {
  panelOpenState: boolean = false;

  constructor() { }

}
