import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserUpdatePageComponent } from './admin-user-update-page.component';

describe('AdminUserUpdatePageComponent', () => {
  let component: AdminUserUpdatePageComponent;
  let fixture: ComponentFixture<AdminUserUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserUpdatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUserUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
