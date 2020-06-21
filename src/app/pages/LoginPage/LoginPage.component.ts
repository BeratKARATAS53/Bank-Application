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
    loginForm: FormGroup;
    customer = new Customer();
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get username() {
        return this.loginForm.get('username');
    }

    get password() {
        return this.loginForm.get('password');
    }

    onSubmit() {
        this.submitted = true;
        this.customer = this.loginForm.value;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;

        this.session.login(this.customer.username, this.customer.password);
    }
}
