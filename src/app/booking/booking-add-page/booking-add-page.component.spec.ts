import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAddPageComponent } from './booking-add-page.component';

describe('BookingAddPageComponent', () => {
  let component: BookingAddPageComponent;
  let fixture: ComponentFixture<BookingAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingAddPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
