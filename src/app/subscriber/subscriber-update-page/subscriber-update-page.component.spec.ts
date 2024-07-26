import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberUpdatePageComponent } from './subscriber-update-page.component';

describe('SubscriberUpdatePageComponent', () => {
  let component: SubscriberUpdatePageComponent;
  let fixture: ComponentFixture<SubscriberUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriberUpdatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
