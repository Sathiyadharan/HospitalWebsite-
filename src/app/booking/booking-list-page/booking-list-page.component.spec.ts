import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListPageComponent } from './booking-list-page.component';

describe('BookingListPageComponent', () => {
  let component: BookingListPageComponent;
  let fixture: ComponentFixture<BookingListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
