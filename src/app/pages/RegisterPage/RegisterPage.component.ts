import { Customer } from './../../models/Customer';
import { SessionService } from './../../services/SessionService/SessionService.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-RegisterPage',
    templateUrl: './RegisterPage.component.html',
    styleUrls: ['./RegisterPage.component.css'],
})
export class RegisterPageComponent implements OnInit {
    registerForm: FormGroup; // Kullanıcı Kayıt Formu
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
        this.registerForm = this.formBuilder.group({
            // Form İle İlgili Validasyonları Belirleme
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    /** Validasyon için form değerlerine ulaşmayı sağlayan get metodları */
    get username() {
        return this.registerForm.get('username');
    }
    get password() {
        return this.registerForm.get('password');
    }

    onSubmit() {
        // Kullanıcı Kaydı Fonksiyonu
        this.customer = this.registerForm.value;

        // Eğer form'da herhangi bir validasyon hatası çıkarsa işlem yapılmaz!
        if (this.registerForm.invalid) {
            alert('Zorunlu Alanları Doldurun!');
            return;
        }

        this.session.register(this.customer.username, this.customer.password);
    }
}
