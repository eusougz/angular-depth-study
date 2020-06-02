import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationAdvancedComponent } from './validation-advanced.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ValidationAdvancedComponent', () => {
  let component: ValidationAdvancedComponent;
  let fixture: ComponentFixture<ValidationAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
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
