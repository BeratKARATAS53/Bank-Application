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

    updateAccount(accountID: number, amount: number) {
        database.accounts
            .update(accountID, {
                amount: amount,
            })
            .then((response) => {
                console.log('Güncellendi', '-', response);
            })
            .catch((error) => {
                alert('Hata Oluştu: ' + error);
            });
    }
    updateAccountByTransfer(
        sendId: number,
        receiveId: number,
        amountSend: number,
        amountReceive: number
    ) {
        database.accounts
            .update(sendId, {
                amount: amountSend,
            })
            .then((response) => {
                database.accounts
                    .update(receiveId, {
                        amount: amountReceive,
                    })
                    .then((response) => {
                        console.log('Güncellendi, Alıcı', '-', response);
                    })
                    .catch((err) => console.log('Alan Kullanıcı Hatası', err));

                console.log('Güncellendi, Gönderen', '-', response);
            })
            .catch((error) => {
                alert('Gönderen Kullanıcı Hatası: ' + error);
            });
    }
    deleteAccount(accountID: number) {
        database.accounts
            .delete(accountID)
            .then(() => {
                alert('Hesap Başarıyla Silindi.');
                window.location.reload();
            })
            .catch((error) => {
                alert('Hata Oluştu: ' + error);
            });
    }
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
export async function getAccountKey(accountNumber: number) {
    // Hesabın Primary Key'ini Getirme Fonksiyonu
    return await database.accounts
        .where('accountNumber')
        .equals(accountNumber)
        .primaryKeys();
}
export async function getAccount(username: string, accountNumber: number) {
    // Hesap Detayını Getirme Fonksiyonu
    return await database.accounts
        .where({ customerName: username })
        .and((account) => account.accountNumber == accountNumber)
        .toArray();
}
export async function getAccountWithoutUsername(
    username: string,
    accountNumber: number
) {
    // Hesap Detayını Getirme Fonksiyonu
    return await database.accounts
        .where({ accountNumber: accountNumber })
        .and((account) => account.customerName != username)
        .toArray();
}
