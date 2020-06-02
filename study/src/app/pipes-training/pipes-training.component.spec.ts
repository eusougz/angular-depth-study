import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTrainingComponent } from './pipes-training.component';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

describe('PipesTrainingComponent', () => {
  let component: PipesTrainingComponent;
  let fixture: ComponentFixture<PipesTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedPipesModule ],
      declarations: [ PipesTrainingComponent ],
      providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    registerLocaleData(localePt);
    fixture = TestBed.createComponent(PipesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
