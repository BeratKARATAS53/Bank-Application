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
    

    async deleteAccount(accountNumber: number) {
        let uniqueKey: number;
        await getAccountKey(this.username, accountNumber).then((response) => {
            uniqueKey = response[0];
        });
        this.accountService.deleteAccount(uniqueKey);
    }

    gotoDetails(accountNumber: any) {
        this.router.navigate(['/account/', accountNumber]);
    }

}
