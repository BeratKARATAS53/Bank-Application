import { RegisterPageComponent } from './../../pages/RegisterPage/RegisterPage.component';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { database } from '../DexieService/BankApplicationDB';

export const TOKEN_NAME: string = 'token';
@Injectable({
    providedIn: 'root',
})
export class SessionService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private router: Router) {}
    ngOnInit() {}

    getToken(): string {
        // Giriş yapan kullanıcının tokenını local storage'dan çekme işlemi
        return localStorage.getItem(TOKEN_NAME);
    }
    setToken(token: string): void {
        // Giriş yapan kullanıcının tokenını local storage'a kaydetme işlemi
        // ! Backend olmadığından gerçek bir token yerine kullanıcı adını local storage'a ekliyorum.
        localStorage.setItem(TOKEN_NAME, token);
    }

    register(username: string, password: string) {
        // Kayıt Olma Fonksiyonu
        database.customers
            .put({ username: username, password: password })
            .then(() => {
                alert('Kayıt Başarılı');
                // this.registerComp.submitted = true
                // Eğer veritabanında böyle bir kullanıcı yoksa yeni kullanıcıyı eklenir ve login sayfasına yönlendirilir.
                this.router.navigateByUrl('/login');
            })
            .catch((error) => {
                // this.registerComp.submitted = false
                alert(
                    'Bu İsim Kullanılmakta! Başka Bir Kullanıcı Adı Deneyiniz!' +
                        error
                );
            });
    }

    login(username: string, password: string) {
        database.customers
            .where({ username: username, password: password })
            .toArray()
            .then((list) => {
                list.forEach((item) => {
                    if (item) {
                        alert('Giriş Başarılı');
                        // this.registerComp.loggedIn = true
                        this.setToken(item.username); // Eğer giriş başarılı ise token local storage'a kaydedilir.
                        this.router.navigateByUrl('/'); // Ardından Ana Sayfaya yönlendiriyorum.
                    }
                });
            })
            .catch((error) => {
                // this.registerComp.loggedIn = true
                alert('Hatalı Ya Da Eksik Bilgi Girdiniz!');
            });
    }

    logOut() {
        // Oturumdan Çıkış İşlemi
        localStorage.clear(); // Local Storage'dan token temizlenir.
        window.location.reload(); // Sayfa yenilenerek otomatikman login sayfasına yönlendirilir.
    }
}
