import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLearningFormComponent } from './admin-learning-form.component';

describe('AdminLearningFormComponent', () => {
  let component: AdminLearningFormComponent;
  let fixture: ComponentFixture<AdminLearningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLearningFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLearningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
