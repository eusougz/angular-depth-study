import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationComponent } from './form-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormValidationComponent', () => {
  let component: FormValidationComponent;
  let fixture: ComponentFixture<FormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ FormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
