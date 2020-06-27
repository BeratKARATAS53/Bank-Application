import { Injectable } from '@angular/core';
import { database } from '../DexieService/BankApplicationDB';

@Injectable({
    providedIn: 'root',
})
export class TransferService {
    constructor() {}

    addTransfer(
        // Transfer Ekleme Fonksiyonu
        customerName: string,
        customerSend: number,
        customerReceive: number,
        amount: number,
        description: string
    ) {
        database.transfers
            .put({
                customerName: customerName,
                customerSend: customerSend,
                customerReceive: customerReceive,
                amount: amount,
                description: description,
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

export async function userTransfers(username: string) {
    // Kullanıcının Transferlerini Getirme Fonksiyonu
    return await database.transfers
        .where('customerName')
        .equalsIgnoreCase(username)
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
