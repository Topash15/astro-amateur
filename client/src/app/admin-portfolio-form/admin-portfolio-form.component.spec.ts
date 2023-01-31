import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortfolioFormComponent } from './admin-portfolio-form.component';

describe('AdminPortfolioFormComponent', () => {
  let component: AdminPortfolioFormComponent;
  let fixture: ComponentFixture<AdminPortfolioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPortfolioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortfolioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
