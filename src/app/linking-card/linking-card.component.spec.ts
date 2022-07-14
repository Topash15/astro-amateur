import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkingCardComponent } from './linking-card.component';

describe('LinkingCardComponent', () => {
  let component: LinkingCardComponent;
  let fixture: ComponentFixture<LinkingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
