import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absoluteValue'
})
export class AbsoluteValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
        return value < 0 ? Math.abs(value) : value;
  }

}
