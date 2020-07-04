import { Account } from './../../models/Account';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import {
    AccountService,
    userAccounts,
    numberOfAccounts,
    getAccountKey,
} from 'src/app/services/AccountService/AccountService.service';
import { CurrencyConverterService } from 'src/app/services/CurrencyConverter/CurrencyConverter.service';

@Component({
    selector: 'app-AccountCard',
    templateUrl: './AccountCard.component.html',
    styleUrls: ['./AccountCard.component.css'],
})
export class AccountCardComponent implements OnInit {
    accounts: Account[]; // Kullanıcının Hesapları
    numberOfAccounts: number; // Kullanıcının Hesap Adeti

    username: string; // Giriş Yapan Kullanıcı

    closeResult: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService,
        private accountService: AccountService,
        private currencyService: CurrencyConverterService
    ) {
        if (!session.getToken()) {
            // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
            this.router.navigateByUrl('/login');
        } else {
            this.getFirst(session.getToken());
        }
    }

    async getFirst(username: string) {
        this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.
        await userAccounts(username).then(
            // Kullanıcının hesapları "accounts" değişkenine kaydedilir.
            (resolve) => (this.accounts = resolve)
        );
        await numberOfAccounts(username).then(
            // Kullanıcının hesap adeti "numberOfAccounts" değişkenine kaydedilir.
            (resolve) => (this.numberOfAccounts = resolve)
        );
    }
    ngOnInit() {}

    async deleteAccount(accountNumber: number) {
        // Hesap Silme Fonksiyonu
        let uniqueKey: number;
        await getAccountKey(accountNumber).then((response) => {
            // Öncelikle hesabın primary key'i alınır.
            uniqueKey = response[0];
            console.log(response);
        });
        this.accountService.deleteAccount(uniqueKey); // Alınan primary key ile hesap silinir.
    }

    gotoDetails(accountNumber: any) {
        // Detay Sayfasına Yönlendirme Fonksiyonu
        this.router.navigate(['/account/', accountNumber]);
    }
}
