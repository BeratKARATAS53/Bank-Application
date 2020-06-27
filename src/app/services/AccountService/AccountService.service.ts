import { Injectable } from '@angular/core';
import { database } from '../DexieService/BankApplicationDB';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor() {}
    ngOnInit() {}

    addAccount(
        // Hesap Ekleme Fonksiyonu
        customerName: string,
        accountName: string,
        accountNumber: number,
        amount: number,
        currency: string,
        rate: number,
        date: string
    ) {
        database.accounts
            .put({
                customerName: customerName,
                accountName: accountName,
                accountNumber: accountNumber,
                amount: amount,
                currency: currency,
                rate: rate,
                date: date,
            })
            .then(() => {
                alert('Hesap Başarıyla Eklendi.');
                window.location.reload();
            })
            .catch((error) => {
                alert('Hata Oluştu: ' + error);
            });
    }
    // updateAccount(
    //     customerName: string,
    //     accountName: string,
    //     accountNumber: number,
    //     amount: number,
    //     currency: string,
    //     rate: number,
    //     date: string
    // ) {
    //     database.accounts
    //         .update({
    //             customerName: customerName,
    //             accountName: accountName,
    //             accountNumber: accountNumber,
    //             amount: amount,
    //             currency: currency,
    //             rate: rate,
    //             date: date,
    //         })
    //         .then(() => {
    //             alert('Hesap Başarıyla Güncellendi.');
    //             window.location.reload();
    //         })
    //         .catch((error) => {
    //             alert('Hata Oluştu: ' + error);
    //         });
    // }
}

export async function userAccounts(username: string) {
    // Kullanıcının Hesaplarını Getirme Fonksiyonu
    return await database.accounts
        .where('customerName')
        .equalsIgnoreCase(username)
        .reverse()
        .toArray();
}
export async function numberOfAccounts(username: string) {
    // Kullanıcını Hesap Sayısını Bulma Fonksiyonu
    return await database.accounts
        .where('customerName')
        .equalsIgnoreCase(username)
        .count();
}
export async function getAccount(username: string, accountNumber: number) {
    // Hesap Detayını Getirme Fonksiyonu
    return await database.accounts
        .where({ customerName: username })
        .and((account) => account.accountNumber == accountNumber)
        .toArray();
}
