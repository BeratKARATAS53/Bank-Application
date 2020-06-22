import { Injectable } from '@angular/core';
import { database } from '../DexieService/BankApplicationDB';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor() {}
    ngOnInit() {}

    addAccount(
        customerName: string,
        accountName: string,
        accountNumber: number,
        amount: number,
        currency: string,
        rate: number,
        date: string
    ) {
        database.accounts
            .where({ customerName: customerName, accountNumber: accountNumber })
            .and((account) => account.amount >= amount)
            .count()
            .then((resolve) => {
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
                    .then(() => {})
                    .catch(function (error) {
                        alert('Hata Oluştu: ' + error);
                    });
                if (resolve != 0) {
                    alert('Yeni Hesap Eklendi.');
                    window.location.reload();
                } else {
                    alert('Bakiyeniz Yetersiz!');
                }
            })
            .catch((error) => {
                // console.log(error);
            });
    }
}

export async function userAccounts(username: string) {
    return await database.accounts
        .where('customerName')
        .equalsIgnoreCase(username)
        .reverse()
        .toArray();
}
export async function numberOfAccounts(username: string) {
    return await database.accounts
        .where('customerName')
        .equalsIgnoreCase(username)
        .count();
}
export async function getAccount(username: string, accountNumber: number) {
    return await database.accounts.where({"customerName":username, "accountNumber":accountNumber}).toArray()
}
export async function userAccountsAboveTheAmount(
    username: string,
    amount: number
) {
    return await database.accounts
        .where('customerName')
        .equalsIgnoreCase(username)
        .and((account) => account.amount >= amount)
        .reverse()
        .toArray();
}
