import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddPageComponent } from './doctor-add-page.component';

describe('DoctorAddPageComponent', () => {
  let component: DoctorAddPageComponent;
  let fixture: ComponentFixture<DoctorAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorAddPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
