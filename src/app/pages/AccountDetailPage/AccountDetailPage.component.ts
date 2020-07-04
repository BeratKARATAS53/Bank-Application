import { AccountService } from './../../services/AccountService/AccountService.service';
import { Transfer } from './../../models/Transfer';
import {
    userAccountSendTransfers,
    userAccountReceiveTransfers,
} from './../../services/TransferService/TransferService.service';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import { getAccount } from 'src/app/services/AccountService/AccountService.service';
import { Account } from './../../models/Account';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-AccountDetailPage',
    templateUrl: './AccountDetailPage.component.html',
    styleUrls: ['./AccountDetailPage.component.css'],
})
export class AccountDetailPageComponent implements OnInit {
    account: Account; // Hesap Bilgisi
    accountNumber: number; // Hesap Numarası
    username: string; // Giriş Yapan Kullanıcı

    accountSendTransfers: Transfer[]; // Gönderilen Transferler
    accountReceiveTransfers: Transfer[]; // Alınan Transferler

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService,
        private accountService: AccountService
    ) {
        if (!session.getToken()) {
            // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirilir.
            this.router.navigateByUrl('/login');
        } else {
            this.getFirst(session.getToken());
        }
    }
    
    async getFirst(username: string) {
        this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.
        await getAccount(
            // Hesap bilgisi url'den gelen accountNumber değeri ile "account" değişkenine kaydedilir.
            username,
            this.route.snapshot.params.accountNumber
        ).then((resolve) => {
            this.account = resolve[0];
        });
        await userAccountSendTransfers(
            // Kullanıcının gönderdiği transferler "accountSendTransfers" değişkenine kaydedilir.
            username,
            this.route.snapshot.params.accountNumber
        ).then((response) => {
            this.accountSendTransfers = response;
        });
        await userAccountReceiveTransfers(
            // Kullanıcının aldığı transferler "accountReceiveTransfers" değişkenine kaydedilir.
            username,
            this.route.snapshot.params.accountNumber
        ).then((response) => {
            this.accountReceiveTransfers = response;
        });
    }

    ngOnInit() {}
}
