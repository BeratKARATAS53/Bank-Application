import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'absoluteValue',
})
export class AbsoluteValuePipe implements PipeTransform {
    // Negatif değerleri pozitif değerlere dönüştürme işlemi
    transform(value: any, args?: any): any {
        return value < 0 ? Math.abs(value) : value;
    }
}
