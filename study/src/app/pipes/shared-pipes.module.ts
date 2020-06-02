import { NgModule } from '@angular/core';
import { YesOrNoPipe } from './yes-or-no.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    YesOrNoPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [ YesOrNoPipe ]
})
export class SharedPipesModule {}
