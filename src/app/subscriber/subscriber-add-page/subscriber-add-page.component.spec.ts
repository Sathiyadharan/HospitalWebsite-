import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberAddPageComponent } from './subscriber-add-page.component';

describe('SubscriberAddPageComponent', () =>{
  let component: SubscriberAddPageComponent;
  let fixture: ComponentFixture<SubscriberAddPageComponent>;

  beforeEach(async () =>{
    await TestBed.configureTestingModule({
      imports: [SubscriberAddPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
