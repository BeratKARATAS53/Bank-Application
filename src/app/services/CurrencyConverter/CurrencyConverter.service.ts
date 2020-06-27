import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CurrencyConverterService {
    currencies = { $: 6, '€': 7, Altın: 390, TL: 1 };

    constructor() {}

    convert( // Para Miktarını Birimlere Göre Çevirme İşlemi
        oldAccountCurrency: string,
        newAccountCurrency: string,
        newAccountAmount: number,
    ): number {
        let rate: number =
            this.currencies[newAccountCurrency] /
            this.currencies[oldAccountCurrency];
        let convertedMoney: number = newAccountAmount * rate;
        return convertedMoney;
    }
}
