import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListPageComponent } from './doctor-list-page.component';

describe('DoctorListPageComponent', () => {
  let component: DoctorListPageComponent;
  let fixture: ComponentFixture<DoctorListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
