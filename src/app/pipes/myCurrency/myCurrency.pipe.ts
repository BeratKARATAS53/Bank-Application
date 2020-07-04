import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myCurrency',
})
export class MyCurrencyPipe implements PipeTransform {
    // Nokta'dan sonra 2 basamak gösterme işlemi
    transform(value: any): any {
        let result: number = Math.round(value * 100) / 100;
        return result;
    }
}
