import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipesTrainingComponent } from './pipes-training/pipes-training.component';
import { AboutComponent } from './about/about.component';
import { registerLocaleData } from '@angular/common';
import { YesOrNoPipe } from './pipes/yes-or-no.pipe';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipesTrainingComponent,
    AboutComponent,
    YesOrNoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
