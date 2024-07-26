import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSigninComponent } from './doctor-signin.component';

describe('DoctorSigninComponent', () => {
  let component: DoctorSigninComponent;
  let fixture: ComponentFixture<DoctorSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorSigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
