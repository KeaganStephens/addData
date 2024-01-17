import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSubInputComponent } from './test-sub-input.component';

describe('TestSubInputComponent', () => {
  let component: TestSubInputComponent;
  let fixture: ComponentFixture<TestSubInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSubInputComponent]
    });
    fixture = TestBed.createComponent(TestSubInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
