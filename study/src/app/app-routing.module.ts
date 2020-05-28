import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { ValidationAdvancedComponent } from './validation-advanced/validation-advanced.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form-validation',
    component: FormValidationComponent
  },
  {
    path: 'dinamic-form',
    component: DinamicFormComponent
  },
  {
    path: 'validation-advanced',
    component: ValidationAdvancedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
