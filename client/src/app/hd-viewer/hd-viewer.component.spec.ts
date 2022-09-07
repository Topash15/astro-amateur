import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdViewerComponent } from './hd-viewer.component';

describe('HdViewerComponent', () => {
  let component: HdViewerComponent;
  let fixture: ComponentFixture<HdViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HdViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
