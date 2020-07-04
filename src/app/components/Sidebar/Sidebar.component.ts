import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AccountService,
    numberOfAccounts,
    getAccount,
} from 'src/app/services/AccountService/AccountService.service';
import { Account } from './../../models/Account';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-Sidebar',
    templateUrl: './Sidebar.component.html',
    styleUrls: ['./Sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
    username: string;  // Giriş Yapan Kullanıcı
    numberOfAccounts: number; // Kullanıcının Hesap Adeti

    closeResult: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService,
        private accountService: AccountService,
        private modalService: NgbModal
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
        await numberOfAccounts(username).then(
            // Kullanıcının hesap adeti "numberOfAccounts" değişkenine kaydedilir.
            (resolve) => (this.numberOfAccounts = resolve)
        );
    }

    ngOnInit() {}

    openModal(content: any) {
        // Oturumu Kapat Modelini Açma Fonksiyonu
        this.modalService
            .open(content, {
                ariaLabelledBy: 'modal-basic-title',
                centered: true,
            })
            .result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            });
    }

    logOut() {
        // Oturumu Kapatma Fonksiyonu
        this.session.logOut();
    }
}
