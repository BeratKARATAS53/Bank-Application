import { SessionService } from './../../services/SessionService/SessionService.service';
import { Customer } from './../../models/Customer';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-LoginPage',
    templateUrl: './LoginPage.component.html',
    styleUrls: ['./LoginPage.component.css'],
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup; // Kullanıcı Giriş Formu
    customer = new Customer(); // Form İçin Kullanıcı Objesi

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) {
        if (session.getToken()) {
            // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
            this.router.navigateByUrl('/main');
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            // Form İle İlgili Validasyonları Belirleme
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    /** Validasyon için form değerlerine ulaşmayı sağlayan get metodları */
    get username() {
        return this.loginForm.get('username');
    }
    get password() {
        return this.loginForm.get('password');
    }

    onSubmit() {
        // Oturum Açma Fonkiyonu
        this.customer = this.loginForm.value;

        // Eğer form'da herhangi bir validasyon hatası çıkarsa işlem yapılmaz!
        if (this.loginForm.invalid) {
            alert('Zorunlu Alanları Doldurun!');
            return;
        }

        this.session.login(this.customer.username, this.customer.password);
    }
}
