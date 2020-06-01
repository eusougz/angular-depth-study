import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesorno'
})
export class YesOrNoPipe implements PipeTransform {

  transform(value) {
    if (value) {
      return 'Sim';
    }
    return 'Não';
  }

}
