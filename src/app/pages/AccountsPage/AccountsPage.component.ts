import { Account } from './../../models/Account';
import {
    AccountService,
    getAccount,
} from './../../services/AccountService/AccountService.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import {
    userAccounts,
    numberOfAccounts,
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
            amount: ['10000', Validators.required],
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

            if (this.newAccount.amount > this.otherAccount.amount) {
                alert('Paranın Çekileceği Hesabınızda Yeterli Bakiye Yok!');
                return;
            }
        }

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

    gotoDetails(accountNumber: any) {
        this.router.navigate(['/account/', accountNumber]);
    }

    logOut() {
        this.session.logOut();
    }
}
