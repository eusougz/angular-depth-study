import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { ValidationAdvancedComponent } from './validation-advanced/validation-advanced.component';
import { PipesTrainingComponent } from './pipes-training/pipes-training.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form-validation', component: FormValidationComponent },
  { path: 'pipes-training', component: PipesTrainingComponent },
  { path: 'validation-advanced', component: ValidationAdvancedComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
