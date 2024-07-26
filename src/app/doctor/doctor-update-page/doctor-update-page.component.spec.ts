import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdatePageComponent } from './doctor-update-page.component';

describe('DoctorUpdatePageComponent', () => {
  let component: DoctorUpdatePageComponent;
  let fixture: ComponentFixture<DoctorUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorUpdatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
