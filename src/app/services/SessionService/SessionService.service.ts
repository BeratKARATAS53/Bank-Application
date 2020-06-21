import { RegisterPageComponent } from './../../pages/RegisterPage/RegisterPage.component';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { database } from '../DexieService/BankApplicationDatabase';

export const TOKEN_NAME: string = 'token';
@Injectable({
    providedIn: 'root',
})
export class SessionService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private router: Router) {}
    ngOnInit() {}

    getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
    }
    setToken(token: string): void {
        localStorage.setItem(TOKEN_NAME, token);
    }

    register(username: string, password: string) {
        database.customers
            .put({ username: username, password: password })
            .then(() => {
                alert('Kayıt Başarılı');
                // this.registerComp.submitted = true
                // Eğer veritabanında böyle bir kullanıcı yoksa yeni kullanıcıyı ekliyorum ve login sayfasına yönlendiriyorum.
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
                        this.setToken(item.username); // Eğer giriş başarılı ise token'ı local storage'a kaydediyorum.
                        this.router.navigateByUrl('/'); // Ardından Ana Sayfaya yönlendiriyorum.
                    }
                });
            })
            .catch((error) => {
                // this.registerComp.loggedIn = true
                alert('Hatalı Ya Da Eksik Bilgi Girdiniz!');
            });
    }

    logOut(){
        localStorage.clear();
        window.location.reload();
    }
}
