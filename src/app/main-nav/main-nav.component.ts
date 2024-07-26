import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {



  menus = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));


  menuSelected:number = 0;
  


  constructor(private router:Router) {

  }


  onMenu(menu:number) {
    this.menuSelected = menu;

    switch(menu){

      case 1:
        this.router.navigateByUrl(`home/(home:admin-user-list-page)`)
        //this.router.navigate([{ outlets: { home: ['admin-user-list-page'] } }]);
        break;
      case 2: 
        this.router.navigateByUrl(`home/(home:doctor-list-page)`)  
        // this.router.navigate([{ outlets: { home: ['doctor-list-page'] } }]);
        break;
      case 3: 
        this.router.navigateByUrl(`home/(home:subscriber-list-page)`)  
        // this.router.navigate([{ outlets: { home: ['subscriber-list-page'] } }]);
        break;
      case 4: 
        this.router.navigateByUrl(`home/(home:booking-list-page)`)  
        // this.router.navigate([{ outlets: { home: ['booking-list-page'] } }]);        
        break;
    }

    
  }
}
