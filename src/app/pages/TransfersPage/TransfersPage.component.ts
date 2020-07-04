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
    userSendTransfers,
    userReceiveTransfers,
} from './../../services/TransferService/TransferService.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transfer } from './../../models/Transfer';
import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-TransfersPage',
    templateUrl: './TransfersPage.component.html',
    styleUrls: ['./TransfersPage.component.css'],
})
export class TransfersPageComponent implements OnInit {
    transferForm: FormGroup; // Transfer Ekleme Formu

    sendTransfers: Transfer[]; // Gönderilen Transferler
    receiveTransfers: Transfer[]; // Alınan Transferler
    newTransfer = new Transfer(); // Form İçin Transfer Objesi Tanımlama

    accounts: Account[]; // Transfer Eklemek İçin Gerekli Gönderen Kullanıcı Hesap Bilgileri
    userAnotherAccounts: Account[]; // Virman Eklemek İçin Gerekli Alıcı Kullanıcı Hesap Bilgileri

    username: string; // Giriş Yapan Kullanıcı
    rate: number = 15; // Faiz Oranı

    closeResult: string;
    now = formatDate(new Date(), 'dd/MM/yyyy', 'en'); // Kayıt Tarihi İçin Tutulan Değişken

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
        this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.
        await userAccounts(username).then(
            // Kullanıcının hesapları "accounts" değişkenine kaydedilir.
            (resolve) => (this.accounts = resolve)
        );
        await userSendTransfers(username).then(
            // Kullanıcının gönderdiği transferler "accountSendTransfers" değişkenine kaydedilir.
            (resolve) => (this.sendTransfers = resolve)
        );
        await userReceiveTransfers(username).then(
            // Kullanıcının aldığı transferler "accountReceiveTransfers" değişkenine kaydedilir.
            (resolve) => (this.receiveTransfers = resolve)
        );
    }

    ngOnInit() {
        this.transferForm = this.formBuilder.group({
            // Form İle İlgili Validasyonları Belirleme
            cSendAccountNumber: ['', [Validators.required, Validators.min(1)]],
            cReceiveAccountNumber: [
                '',
                [Validators.required, Validators.min(1)],
            ],
            amount: ['', [Validators.required, Validators.min(1)]],
            description: ['', Validators.required],
        });
    }

    /** Validasyon için form değerlerine ulaşmayı sağlayan get metodları */
    get cSendAccountNumber() {
        return this.transferForm.get('cSendAccountNumber');
    }
    get cReceiveAccountNumber() {
        return this.transferForm.get('cReceiveAccountNumber');
    }
    get amount() {
        return this.transferForm.get('amount');
    }
    get description() {
        return this.transferForm.get('description');
    }

    open(content: any, transferType: string) {
        // Transfer Ekleme Modal'ını Açma
        this.addParamToURL(transferType);
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            });
    }

    async onSubmit() {
        // Transfer Ekleme Fonksiyonu
        this.newTransfer = this.transferForm.value;
        console.log(this.newTransfer);

        // Eğer form'da herhangi bir validasyon hatası çıkarsa işlem yapılmaz!
        if (this.transferForm.invalid) {
            alert('Zorunlu Alanları Doldurun!');
            return;
        }

        let customerSendAccount: Account; // Gönderen Kullanıcı Hesap Bilgisi
        await getAccount(
            this.username,
            this.newTransfer.cSendAccountNumber
        ).then((response) => {
            console.log(response);
            customerSendAccount = response[0];
        });
        let customerReceiveAccount: Account; // Alan Kullanıcı Hesap Bilgisi
        if (this.getParamFromURL() === 'Virman') {
            // Eğer hesap türü "Virman" ise alıcı hesabı bilgisi kullanıcın diğer hesaplarından seçilir.
            console.log('virman');
            await getAccount(
                this.username,
                this.newTransfer.cReceiveAccountNumber
            ).then((response) => {
                customerReceiveAccount = response[0];
            });
        } else {
            // Eğer hesap türü "Havale" ise alıcı hesabı bilgisi girilen hesap numarası bilgisinde göre alınır.
            await getAccountAnotherUser(
                this.username,
                this.newTransfer.cReceiveAccountNumber
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

        let convertMoney: number;
        if (customerReceiveAccount !== null) {
            // Eğer alıcı hesap bilgisi doğru ise;
            convertMoney = this.currencyService.convertForAddTransfer(
                // Para dönüşümü yapılır.
                customerSendAccount.currency,
                customerReceiveAccount.currency,
                this.newTransfer.amount
            );
            if (this.newTransfer.amount > customerSendAccount.amount) {
                // Bakiye'nin yeterli olup olmadığı kontrol edilir.
                alert('Paranın Çekileceği Hesabınızda Yeterli Bakiye Yok!');
                return;
            } else {
                let customerSendKey: number; // Hesap güncelleme işlemi için gönderen kullanıcının hesabının primary key'i alınır.
                await getAccountKey(customerSendAccount.accountNumber).then(
                    (response) => {
                        customerSendKey = response[0];
                    }
                );
                let customerReceiveKey: number; // Hesap güncelleme işlemi için alan kullanıcının hesabının primary key'i alınır.
                await getAccountKey(customerReceiveAccount.accountNumber).then(
                    (response) => {
                        customerReceiveKey = response[0];
                    }
                );

                this.accountService.updateAccountByTransfer(
                    // Hesaplara gerekli parasal güncellemeler yapılır.
                    customerSendKey,
                    customerReceiveKey,
                    customerSendAccount.amount - this.newTransfer.amount,
                    customerReceiveAccount.amount + convertMoney
                );

                this.transferSErvice.addTransfer(
                    // Transfer Eklenir.
                    this.getParamFromURL(),
                    this.username,
                    customerSendAccount.accountName,
                    customerSendAccount.accountNumber,
                    customerSendAccount.amount - this.newTransfer.amount,
                    customerSendAccount.currency,
                    customerReceiveAccount.customerName,
                    customerReceiveAccount.accountName,
                    customerReceiveAccount.accountNumber,
                    customerReceiveAccount.amount + convertMoney,
                    -this.newTransfer.amount,
                    this.newTransfer.description,
                    this.now
                );
            }
        }
    }

    addParamToURL(transferType: string) {
        // Form'da gerekli yerleri değiştirmek için transfer türünü url'e ekleme fonksiyonu
        this.router.navigate([], {
            queryParams: {
                transferType: transferType,
            },
            queryParamsHandling: 'merge',
        });
    }

    getParamFromURL(): string {
        // Form'da gerekli yerleri değiştirmek için transfer türünü url'den alma fonksiyonu
        let transferType: string;
        this.route.queryParams.subscribe((params) => {
            transferType = params['transferType'];
        });
        return transferType;
    }
}
