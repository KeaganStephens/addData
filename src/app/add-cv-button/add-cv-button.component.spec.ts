import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCvButtonComponent } from './add-cv-button.component';

describe('AddCvButtonComponent', () => {
  let component: AddCvButtonComponent;
  let fixture: ComponentFixture<AddCvButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCvButtonComponent]
    });
    fixture = TestBed.createComponent(AddCvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
