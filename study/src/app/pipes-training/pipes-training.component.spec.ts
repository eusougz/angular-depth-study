import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTrainingComponent } from './pipes-training.component';

describe('PipesTrainingComponent', () => {
  let component: PipesTrainingComponent;
  let fixture: ComponentFixture<PipesTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
