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
    registerForm: FormGroup;
    customer = new Customer();

    submitted: boolean = false;
    loggedIn: boolean = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get username() {
        return this.registerForm.get('username');
    }

    get password() {
        return this.registerForm.get('password');
    }
    
    onSubmit() {
        this.submitted = true;
        this.customer = this.registerForm.value;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.session.register(this.customer.username, this.customer.password);
    }
}
