import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchValueComponent } from './patch-value.component';

describe('PatchValueComponent', () => {
  let component: PatchValueComponent;
  let fixture: ComponentFixture<PatchValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
