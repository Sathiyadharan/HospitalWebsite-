import { Routes } from '@angular/router';
import { AdminUserListPageComponent } from './admin/admin-user-list-page/admin-user-list-page.component';
import { AdminUserAddPageComponent } from './admin/admin-user-add-page/admin-user-add-page.component';
import { AdminUserUpdatePageComponent } from './admin/admin-user-update-page/admin-user-update-page.component';
import { DoctorAddPageComponent } from './doctor/doctor-add-page/doctor-add-page.component';
import { SubscriberListPageComponent } from './subscriber/subscriber-list-page/subscriber-list-page.component';
import { SubscriberAddPageComponent } from './subscriber/subscriber-add-page/subscriber-add-page.component';
import { SubscriberUpdatePageComponent } from './subscriber/subscriber-update-page/subscriber-update-page.component';
import { BookingListPageComponent } from './booking/booking-list-page/booking-list-page.component';
import { BookingAddPageComponent } from './booking/booking-add-page/booking-add-page.component';
import { BookingUpdatePageComponent } from './booking/booking-update-page/booking-update-page.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DoctorUpdatePageComponent } from './doctor/doctor-update-page/doctor-update-page.component';
import { DoctorListPageComponent } from './doctor/doctor-list-page/doctor-list-page.component';
import { DoctorConsultComponent } from './doctor-consult/doctor-consult.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { ViewComponent } from './view/view.component';


export const routes: Routes = 
    
  [

    {
        path:'',
        component:AdminLoginComponent,

    },
    {
        path:'admin-login',
        component:AdminLoginComponent,

    },
    {path:'main-nav',
        component:MainNavComponent,
    },

    { path:'home/admin-user-list-page', redirectTo: '/home/(home:admin-user-list-page)' }, // Redirect to named outlet
    

    {
        path:'home',
        component:MainNavComponent,
        children: [

            {
                outlet: 'home',
                path:'admin-user-list-page',
                component:AdminUserListPageComponent,

            },
        
            {
                path:'admin-user-add-page',
                component:AdminUserAddPageComponent,
                outlet: 'home'

            },
            {
                path: 'admin-user-update-page',
                component: AdminUserUpdatePageComponent,
                outlet: 'home',
              },
            {
                path:'doctor-list-page',
                component:DoctorListPageComponent,
                outlet: 'home'
            },
            {
                path:'doctor-add-page',
                component:DoctorAddPageComponent,
                outlet: 'home'
            },
            {
                path:'doctor-update-page',
                component:DoctorUpdatePageComponent,
                outlet: 'home'
            },
        
            {
                path:'subscriber-list-page',
                component:SubscriberListPageComponent,
                outlet: 'home'
            },
            {
                path:'subscriber-add-page',
                component:SubscriberAddPageComponent,
                outlet: 'home'
            },
            {
                path:'subscriber-update-page',
                component:SubscriberUpdatePageComponent,
                outlet: 'home'
            },
        
        
            {
                path:'booking-list-page',
                component:BookingListPageComponent,
                outlet: 'home'
            },
            {
                path:'booking-add-page',
                component:BookingAddPageComponent,
                outlet: 'home'
            },
            {
                path:'booking-update-page',
                component:BookingUpdatePageComponent,
                outlet: 'home'
            },
            {
                path:'doctor-consult',
                component:DoctorConsultComponent,
                outlet: 'home'
            },
            {
                path:'booking-page',
                component:BookingPageComponent,
                outlet: 'home'
            },
            {
                path:'doctor-card',
                component:DoctorCardComponent,
                outlet: 'home'
            },
            {
                path:'view',
                component:ViewComponent,
                outlet: 'home'
            }

        ]
    }
    

    

           




];
