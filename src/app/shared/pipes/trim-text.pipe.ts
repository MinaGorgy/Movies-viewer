import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, textLength: number = 22): string {
    if (value) {
      if (value.length <= textLength) {
        return value;
      }
      value = value.substring(0, textLength) + '...';
      return value;
    }
    return ''
  }

}
