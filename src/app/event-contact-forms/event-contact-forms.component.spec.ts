import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventContactFormsComponent } from './event-contact-forms.component';

describe('EventContactFormsComponent', () => {
  let component: EventContactFormsComponent;
  let fixture: ComponentFixture<EventContactFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventContactFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventContactFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
