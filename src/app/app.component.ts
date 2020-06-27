import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './services/SessionService/SessionService.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'bank-application';
    constructor(private router: Router, private session: SessionService) {
        if (!session.getToken()) {
            // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
            this.router.navigateByUrl('/login');
        }
    }
}
