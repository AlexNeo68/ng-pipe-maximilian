import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, filterField: string): any {
    if (!value.length || filterString === '') {
      return value;
    } else {
      const resArray: string[] = [];
      for (const item of value) {
        if (item[filterField] === filterString) {
          resArray.push(item);
        }
      }
      return resArray;
    }
  }
}
