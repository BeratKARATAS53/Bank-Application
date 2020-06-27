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
    account: Account;
    accountNumber: number;
    username: string;
    numberOfAccounts: number;

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
            // Eğer giriş yapan kullanıcı varsa token'dan kullanıcı adı bilgisi alınır.
            this.getFirst(session.getToken());
        }
    }

    async getFirst(username: string) {
        this.username = this.session.getToken();
        await numberOfAccounts(username).then(
            (resolve) => (this.numberOfAccounts = resolve)
        );
        await getAccount(
            this.username,
            this.route.snapshot.params.accountNumber
        ).then((resolve) => {
            this.account = resolve[0];
        });
    }

    ngOnInit() {}

    openModal(content: any) {
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
        this.session.logOut();
    }
}
