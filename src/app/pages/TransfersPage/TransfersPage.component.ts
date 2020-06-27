import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/AccountService/AccountService.service';

import {
    numberOfAccounts,
} from '../../services/AccountService/AccountService.service';

@Component({
    selector: 'app-TransfersPage',
    templateUrl: './TransfersPage.component.html',
    styleUrls: ['./TransfersPage.component.css'],
})
export class TransfersPageComponent implements OnInit {
    username: string;
    numberOfAccounts: number;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService,
        private accountService: AccountService
    ) {
        if (!session.getToken()) {
            // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
            this.router.navigateByUrl('/login');
        } else {
            this.getFirst(session.getToken());
        }
    }
    async getFirst(username: string) {
        this.username = this.session.getToken()
        await numberOfAccounts(username).then(
            (resolve) => (this.numberOfAccounts = resolve)
        );
    }

    ngOnInit() {}

    logOut() {
        this.session.logOut();
    }
}
