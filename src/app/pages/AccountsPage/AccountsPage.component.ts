import { CurrencyConverterService } from './../../services/CurrencyConverter/CurrencyConverter.service';
import { Account } from './../../models/Account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import {
    getAccount,
    userAccounts,
    numberOfAccounts,
    getAccountKey,
    AccountService,
} from '../../services/AccountService/AccountService.service';

@Component({
    selector: 'app-AccountsPage',
    templateUrl: './AccountsPage.component.html',
    styleUrls: ['./AccountsPage.component.css'],
})
export class AccountsPageComponent implements OnInit {
    accountForm: FormGroup;

    accounts: Account[];
    numberOfAccounts: number;
    newAccount = new Account();
    firstAccount: boolean = false;
    otherAccount: Account;

    username: string;
    rate: number = 15;

    closeResult: string;
    now = formatDate(new Date(), 'dd/MM/yyyy', 'en');

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService,
        private accountService: AccountService,
        private currencyService: CurrencyConverterService,
        private modalService: NgbModal
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

    ngOnInit() {
        this.accountForm = this.formBuilder.group({
            accountName: ['', Validators.required],
            amount: ['10000', [Validators.required, Validators.min(1)]],
            currency: ['TL', Validators.required],
            otherAmount: [[]],
        });
    }

    get accountName() {
        return this.accountForm.get('accountName');
    }
    get amount() {
        return this.accountForm.get('amount');
    }
    get currency() {
        return this.accountForm.get('currency');
    }
    get otherAmount() {
        return this.accountForm.get('otherAmount');
    }

    open(content: any) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            });
    }

    async onSubmit() {
        this.newAccount = this.accountForm.value;

        // stop here if form is invalid
        if (this.accountForm.invalid) {
            return;
        }
        if (this.numberOfAccounts !== 0) {
            await getAccount(this.username, this.otherAmount.value).then(
                (response) => {
                    this.otherAccount = response[0];
                }
            );

            let convertMoney: number = this.currencyService.convert(
                this.otherAccount.currency,
                this.newAccount.currency,
                this.newAccount.amount
            );

            if (convertMoney > this.otherAccount.amount) {
                alert('Paranın Çekileceği Hesabınızda Yeterli Bakiye Yok!');
                return;
            } else {
                let uniqueKey: number;
                await getAccountKey(
                    this.otherAccount.accountNumber
                ).then((response) => {
                    uniqueKey = response[0];
                });

                this.accountService.updateAccount(
                    uniqueKey,
                    this.otherAccount.amount - convertMoney
                );
            }
        }
        console.log(this.newAccount);

        let accountNumber = Math.floor(
            Math.random() * (999999 - 100000 + 1) + 100000
        );

        this.accountService.addAccount(
            this.username,
            this.newAccount.accountName,
            accountNumber,
            this.newAccount.amount,
            this.newAccount.currency,
            this.rate,
            this.now
        );
    }

    async deleteAccount(accountNumber: number) {
        let uniqueKey: number;
        await getAccountKey(accountNumber).then((response) => {
            uniqueKey = response[0];
        });
        this.accountService.deleteAccount(uniqueKey);
    }

    gotoDetails(accountNumber: any) {
        this.router.navigate(['/account/', accountNumber]);
    }

    logOut() {
        this.session.logOut();
    }
}
