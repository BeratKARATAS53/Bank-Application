import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';

@Component({
    selector: 'app-AccountsPage',
    templateUrl: './AccountsPage.component.html',
    styleUrls: ['./AccountsPage.component.css'],
})
export class AccountsPageComponent implements OnInit {
    accountForm: FormGroup;

    username: string;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) {
        if (!session.getToken()) {
            // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
            this.router.navigateByUrl('/login');
        } else {
            this.username = session.getToken();
        }
    }
    ngOnInit() {
        this.accountForm = this.formBuilder.group({
            name: ['', Validators.required],
            amount: ['', Validators.required],
            currency: ['', Validators.required],
        });
    }

    onSubmit() {
        // stop here if form is invalid
        if (this.accountForm.invalid) {
            console.log('Invalid:', this.accountForm);
            return;
        }

        console.log(this.accountForm);
    }
    
    logOut(){
        this.session.logOut()
    }
}
