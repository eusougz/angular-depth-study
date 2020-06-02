import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { ValidationAdvancedComponent } from './validation-advanced/validation-advanced.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    DinamicFormComponent,
    ValidationAdvancedComponent,
    FormValidationComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  ]
})
export class FormulariosModule {}
