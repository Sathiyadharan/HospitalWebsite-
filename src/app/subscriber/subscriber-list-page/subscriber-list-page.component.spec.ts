import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberListPageComponent } from './subscriber-list-page.component';

describe('SubscriberListPageComponent', () => {
  let component: SubscriberListPageComponent;
  let fixture: ComponentFixture<SubscriberListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriberListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
