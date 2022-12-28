import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortBy: string, orderDesc: boolean = false): any {
    return value.sort((a: any, b: any) => {
      if (
        (!orderDesc && a[sortBy] > b[sortBy]) ||
        (orderDesc && a[sortBy] < b[sortBy])
      ) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
