import { SessionService } from 'src/app/services/SessionService/SessionService.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyConverterService } from 'src/app/services/CurrencyConverter/CurrencyConverter.service';

@Component({
    selector: 'app-MainPage',
    templateUrl: './MainPage.component.html',
    styleUrls: ['./MainPage.component.css'],
})
export class MainPageComponent implements OnInit {
    username: string;

    constructor(private router: Router, private session: SessionService) {
        if (!session.getToken()) {
            // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
            this.router.navigateByUrl('/login');
        } else {
            this.getFirst(session.getToken());
        }
    }

    async getFirst(username: string) {
        this.username = this.session.getToken();
    }

    ngOnInit() {}
}
