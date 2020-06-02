import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { ValidationAdvancedComponent } from './validation-advanced/validation-advanced.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

const formulariosRouterConfig: Routes = [
  { path: 'dinamic', component: DinamicFormComponent },
  { path: 'advanced', component: ValidationAdvancedComponent },
  { path: 'default', component: FormValidationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(formulariosRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class FormulariosRoutingModule {}
