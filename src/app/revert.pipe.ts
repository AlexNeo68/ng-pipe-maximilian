import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revert',
})
export class RevertPipe implements PipeTransform {
  transform(value: any): string {
    return value.split('').reverse().join('');
  }
}
