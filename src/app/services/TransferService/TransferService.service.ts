import { getAccount } from './../AccountService/AccountService.service';
import { Injectable } from '@angular/core';
import { database } from '../DexieService/BankApplicationDB';

@Injectable({
    providedIn: 'root',
})
export class TransferService {
    constructor() {}

    addTransfer(
        // Transfer Ekleme Fonksiyonu
        transferType: string,
        cSendName: string,
        cSendAccountName: string,
        cSendAccountNumber: number,
        cSendAccountAmount: number,
        cSendAccountCurrency: string,
        cReceiveName: string,
        cReceiveAccountName: string,
        cReceiveAccountNumber: number,
        amount: number,
        description: string,
        date: string
    ) {
        database.transfers
            .put({
                transferType: transferType,
                cSendName: cSendName,
                cSendAccountName: cSendAccountName,
                cSendAccountNumber: cSendAccountNumber,
                cSendAccountAmount: cSendAccountAmount,
                cSendAccountCurrency: cSendAccountCurrency,
                cReceiveName: cReceiveName,
                cReceiveAccountName: cReceiveAccountName,
                cReceiveAccountNumber: cReceiveAccountNumber,
                amount: amount,
                description: description,
                date: date,
            })
            .then(() => {
                alert('Transfer Başarıyla Eklendi.');
                window.location.reload();
            })
            .catch((error) => {
                alert('Hata Oluştu: ' + error);
            });
    }
}

export async function userSendTransfers(username: string) {
    // Kullanıcının Transferlerini Getirme Fonksiyonu
    return await database.transfers
        .where('cSendName')
        .equalsIgnoreCase(username)
        .reverse()
        .toArray();
}
export async function userReceiveTransfers(username: string) {
    // Kullanıcının Transferlerini Getirme Fonksiyonu
    return await database.transfers
        .where('cReceiveName')
        .equalsIgnoreCase(username)
        .and((transfer) => transfer.cSendName !== username)
        .reverse()
        .toArray();
}
export async function userTransfersLimitTen(username: string) {
    // Kullanıcının Transferlerini Getirme Fonksiyonu
    return await database.transfers
        .where('cSendName')
        .equalsIgnoreCase(username)
        .reverse()
        .limit(10)
        .toArray();
}
export async function userAccountSendTransfers(
    username: string,
    accountNumber: number
) {
    // Kullanıcının Tek Bir Hesabına Ait Gönderdiği Transfer Bilgilerini Getirme Fonksiyonu
    return await database.transfers
        .where({ cSendName: username })
        .and((transfer) => transfer.cSendAccountNumber == accountNumber)
        .reverse()
        .toArray();
}
export async function userAccountReceiveTransfers(
    username: string,
    accountNumber: number
) {
    // Kullanıcının Tek Bir Hesabına Ait Aldığı Transfer Bilgilerini Getirme Fonksiyonu
    return await database.transfers
        .where({ cReceiveName: username })
        .and((transfer) => transfer.cReceiveAccountNumber == accountNumber)
        .reverse()
        .toArray();
}
// export async function getTransferKey(username: string, accountNumber: number) {
//     // Transferin Primary Key'ini Getirme Fonksiyonu
//     return await database.transfers
//         .where({ customerName: username })
//         .and((account) => account.accountNumber == accountNumber)
//         .primaryKeys();
// }
// export async function getTransfer(username: string, accountNumber: number) {
//     // Hesap Detayını Getirme Fonksiyonu
//     return await database.transfers
//         .where({ customerName: username })
//         .and((account) => account.accountNumber == accountNumber)
//         .toArray();
// }
