import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationAdvancedComponent } from './validation-advanced.component';

describe('ValidationAdvancedComponent', () => {
  let component: ValidationAdvancedComponent;
  let fixture: ComponentFixture<ValidationAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
