import {
    getAccount,
    getAccountKey,
    AccountService,
    getAccountWithoutUsername,
    userAccounts,
} from 'src/app/services/AccountService/AccountService.service';
import { CurrencyConverterService } from './../../services/CurrencyConverter/CurrencyConverter.service';
import { Account } from './../../models/Account';
import {
    TransferService,
    userTransfers,
} from './../../services/TransferService/TransferService.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transfer } from './../../models/Transfer';
import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-TransfersPage',
    templateUrl: './TransfersPage.component.html',
    styleUrls: ['./TransfersPage.component.css'],
})
export class TransfersPageComponent implements OnInit {
    transferForm: FormGroup;

    transfers: Transfer[];
    newTransfer = new Transfer();

    accounts: Account[];

    username: string;
    rate: number = 15;

    closeResult: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService,
        private transferSErvice: TransferService,
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
        await userTransfers(username).then(
            (resolve) => (this.transfers = resolve)
        );
        console.log(this.transfers);
    }

    ngOnInit() {
        this.transferForm = this.formBuilder.group({
            customerSend: ['', [Validators.required, Validators.min(1)]],
            customerReceive: ['', [Validators.required, Validators.min(1)]],
            amount: ['', [Validators.required, Validators.min(1)]],
            description: ['', Validators.required],
        });
    }

    get customerSend() {
        return this.transferForm.get('customerSend');
    }
    get customerReceive() {
        return this.transferForm.get('customerReceive');
    }
    get amount() {
        return this.transferForm.get('amount');
    }
    get description() {
        return this.transferForm.get('description');
    }

    open(content: any) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            });
    }

    async onSubmit() {
        this.newTransfer = this.transferForm.value;

        // stop here if form is invalid
        if (this.transferForm.invalid) {
            return;
        }

        let customerSendAccount: Account;
        await getAccount(this.username, this.newTransfer.customerSend).then(
            (response) => {
                customerSendAccount = response[0];
            }
        );
        let customerReceiveAccount: Account;
        await getAccountWithoutUsername(
            this.username,
            this.newTransfer.customerReceive
        ).then((response) => {
            console.log(response);
            customerReceiveAccount = response[0];
        });
        if (customerReceiveAccount) {
            let convertMoney: number = this.currencyService.convert(
                customerSendAccount.currency,
                customerReceiveAccount.currency,
                this.newTransfer.amount
            );
            if (convertMoney > customerSendAccount.amount) {
                alert('Paranın Çekileceği Hesabınızda Yeterli Bakiye Yok!');
                return;
            } else {
                console.log('else');
                let customerSendKey: number;
                await getAccountKey(customerSendAccount.accountNumber).then(
                    (response) => {
                        customerSendKey = response[0];
                    }
                );
                let customerReceiveKey: number;
                await getAccountKey(customerReceiveAccount.accountNumber).then(
                    (response) => {
                        customerReceiveKey = response[0];
                    }
                );

                this.accountService.updateAccountByTransfer(
                    customerSendKey,
                    customerReceiveKey,
                    customerSendAccount.amount - convertMoney,
                    customerReceiveAccount.amount + this.newTransfer.amount
                );
            }
            console.log(customerReceiveAccount);
            console.log(customerSendAccount);
        }

        this.transferSErvice.addTransfer(
            this.username,
            this.newTransfer.customerSend,
            this.newTransfer.customerReceive,
            this.newTransfer.amount,
            this.newTransfer.description
        );
    }

    logOut() {
        this.session.logOut();
    }
}
