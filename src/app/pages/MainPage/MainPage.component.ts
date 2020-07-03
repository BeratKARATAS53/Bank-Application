import { Account } from './../../models/Account';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyConverterService } from 'src/app/services/CurrencyConverter/CurrencyConverter.service';

import {
    userAccounts,
    numberOfAccounts,
    AccountService,
} from '../../services/AccountService/AccountService.service';

@Component({
    selector: 'app-MainPage',
    templateUrl: './MainPage.component.html',
    styleUrls: ['./MainPage.component.css'],
})
export class MainPageComponent implements OnInit {
    accounts: Account[];
    numberOfAccounts: number;

    username: string;

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
        this.username = this.session.getToken();
        await userAccounts(username).then(
            (resolve) => (this.accounts = resolve)
        );
        await numberOfAccounts(username).then(
            (resolve) => (this.numberOfAccounts = resolve)
        );
    }
    
    ngOnInit() {}
}
