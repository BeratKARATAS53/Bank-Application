import {
    getAccount,
    getAccountKey,
    AccountService,
    userAccounts,
    getAccountAnotherUser,
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
import { formatDate } from '@angular/common';
import { stringify } from 'querystring';

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
    userAnotherAccounts: Account[];

    username: string;
    rate: number = 15;

    closeResult: string;
    now = formatDate(new Date(), 'dd/MM/yyyy', 'en');

    constructor(
        private formBuilder: FormBuilder,
        public route: ActivatedRoute,
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

    open(content: any, transferType: string) {
        this.addParamToURL(transferType);
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            });
    }

    async onSubmit() {
        this.newTransfer = this.transferForm.value;
        console.log(this.newTransfer);

        // stop here if form is invalid
        if (this.transferForm.invalid) {
            return;
        }

        let customerSendAccount: Account;
        await getAccount(this.username, this.newTransfer.customerSend).then(
            (response) => {
                console.log(response);
                customerSendAccount = response[0];
            }
        );
        console.log('Send:', customerSendAccount);
        let customerReceiveAccount: Account;
        if (this.getParamFromURL() === 'Virman') {
            console.log('virman');
            await getAccount(
                this.username,
                this.newTransfer.customerReceive
            ).then((response) => {
                customerReceiveAccount = response[0];
            });
        } else {
            console.log('eft');
            await getAccountAnotherUser(
                this.username,
                this.newTransfer.customerReceive
            )
                .then((response) => {
                    if (response.length === 0) {
                        alert('Alan Kullanıcı Hesabı Bulunamadı!');
                        return;
                    } else {
                        customerReceiveAccount = response[0];
                    }
                })
                .catch((error) => console.log(error));
        }
        console.log('Receive:', customerReceiveAccount);

        let convertMoney: number;
        if (customerReceiveAccount !== null) {
            convertMoney = this.currencyService.convertForAddTransfer(
                customerSendAccount.currency,
                customerReceiveAccount.currency,
                this.newTransfer.amount
            );
            if (this.newTransfer.amount > customerSendAccount.amount) {
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
                    customerSendAccount.amount - this.newTransfer.amount,
                    customerReceiveAccount.amount + convertMoney
                );
                console.log(convertMoney);
            }
            console.log(customerSendAccount);
        }

        this.transferSErvice.addTransfer(
            this.getParamFromURL(),
            this.username,
            this.newTransfer.customerSend,
            this.newTransfer.customerReceive,
            0 - this.newTransfer.amount,
            this.newTransfer.description,
            this.now,
            customerSendAccount.accountName,
            customerSendAccount.amount - convertMoney,
            customerSendAccount.currency
        );
    }

    addParamToURL(transferType: string) {
        this.router.navigate([], {
            queryParams: {
                transferType: transferType,
            },
            queryParamsHandling: 'merge',
        });
    }
    getParamFromURL(): string {
        let transferType: string;
        this.route.queryParams.subscribe((params) => {
            transferType = params['transferType'];
        });
        return transferType;
    }
    logOut() {
        this.session.logOut();
    }
}
