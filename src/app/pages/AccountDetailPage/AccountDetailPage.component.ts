import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import {
    AccountService,
    numberOfAccounts,
    getAccount,
} from 'src/app/services/AccountService/AccountService.service';
import { Account } from './../../models/Account';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-AccountDetailPage',
    templateUrl: './AccountDetailPage.component.html',
    styleUrls: ['./AccountDetailPage.component.css'],
})
export class AccountDetailPageComponent implements OnInit {
    account: Account;
    accountNumber: number;
    username: string;

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
            // Eğer giriş yapan kullanıcı varsa token'dan kullanıcı adı bilgisi alınır.
            this.getFirst(session.getToken());
        }
    }
    async getFirst(username: string) {
        this.username = this.session.getToken();
        await getAccount(
            this.username,
            this.route.snapshot.params.accountNumber
        ).then((resolve) => {
            this.account = resolve[0];
        });
    }

    ngOnInit() {}

    logOut() {
        this.session.logOut();
    }
}
