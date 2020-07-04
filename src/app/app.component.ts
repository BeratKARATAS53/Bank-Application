import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './services/SessionService/SessionService.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'bank-application';
    constructor(
        private router: Router,
        private session: SessionService,
        public translate: TranslateService
    ) {
        translate.addLangs(['tr', 'en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('tr');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('tr');
        if (!session.getToken()) {
            // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
            this.router.navigateByUrl('/login');
        }
    }
    changeLanguage(language: string) {
        this.translate.use(language);
    }
}
