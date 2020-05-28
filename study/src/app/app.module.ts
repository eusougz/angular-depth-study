import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgBrazil, TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { ValidationAdvancedComponent } from './validation-advanced/validation-advanced.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormValidationComponent,
    DinamicFormComponent,
    ValidationAdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMask.TextMaskModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
