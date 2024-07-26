import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingUpdatePageComponent } from './booking-update-page.component';

describe('BookingUpdatePageComponent', () => {
  let component: BookingUpdatePageComponent;
  let fixture: ComponentFixture<BookingUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingUpdatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
