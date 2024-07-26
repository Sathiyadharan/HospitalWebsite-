import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAddPageComponent } from './admin-user-add-page.component';

describe('AdminUserAddPageComponent', () => {
  let component: AdminUserAddPageComponent;
  let fixture: ComponentFixture<AdminUserAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserAddPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUserAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
