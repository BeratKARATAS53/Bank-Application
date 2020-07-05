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
    accountForm: FormGroup; // Hesap Ekleme Formu

    accounts: Account[]; // Kullanıcın Hesapları
    numberOfAccounts: number; // Kullanıcının Hesap Adeti
    newAccount = new Account(); // Açılacak Yeni Hesap
    firstAccount: boolean = false; // Açılacak Hesabın İlk Hesap Olup Olmadığını Tutan Değişken
    otherAccount: Account; // Açılan Hesaba Para Aktaracak Diğer Hesap

    username: string; // Giriş Yapan Kullanıcı
    rate: number = 15; // Sabit Faiz Oranı

    closeResult: string;
    now = formatDate(new Date(), 'dd/MM/yyyy', 'en'); // Kayıt Tarihi İçin Tutulan Değişken

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

    ngOnInit() {
        this.accountForm = this.formBuilder.group({
            // Form İle İlgili Validasyonları Belirleme
            accountName: ['', Validators.required],
            amount: [10000, [Validators.required, Validators.min(1)]],
            currency: ['TL', Validators.required],
            otherAmount: [[]],
        });
    }

    /** Validasyon için form değerlerine ulaşmayı sağlayan get metodları */
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
        // Hesap Ekleme Modal'ını Açma Fonksiyonu
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            });
    }

    async onSubmit() {
        // Hesap Ekleme Fonksiyonu
        this.newAccount = this.accountForm.value;

        // Form'da validasyon hatası varsa geri döner.
        if (this.accountForm.invalid) {
            alert('Zorunlu Alanları Doldurun!');
            return;
        }
        if (this.numberOfAccounts !== 0) {
            // Kullanıcının ilk hesabı açıp açmadığını kontrol etme
            await getAccount(this.username, this.otherAmount.value).then(
                // Hesaba yüklenecek paranın çekileceği hesap bilgisi
                (response) => {
                    this.otherAccount = response[0];
                }
            );

            let convertMoney: number = this.currencyService.convertForAddAccount(
                // Döviz Kuru'na göre para dönüştürme işlemleri
                this.otherAccount.currency,
                this.newAccount.currency,
                this.newAccount.amount
            );

            if (convertMoney > this.otherAccount.amount) {
                // Dönüştürülen para çekilecek hesaptaki paradan fazla ise
                alert('Paranın Çekileceği Hesabınızda Yeterli Bakiye Yok!');
                return;
            } else {
                // Yeterli bakiye varsa
                let uniqueKey: number;
                await getAccountKey(this.otherAccount.accountNumber).then(
                    (response) => {
                        uniqueKey = response[0];
                    }
                );

                this.accountService.updateAccount(
                    // Diğer hesaptan yatırılacak para miktarı düşülür.
                    uniqueKey,
                    this.otherAccount.amount - convertMoney
                );
            }
        }

        let accountNumber = Math.floor(
            // Rastgele bir hesap numarası
            Math.random() * (999999 - 100000 + 1) + 100000
        );

        this.accountService.addAccount(
            // Hesap veritabanına eklenir.
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
        // Detay Sayfasına Yönlendirme Fonksiyonu
        this.router.navigate(['/account/', accountNumber]);
    }
}
