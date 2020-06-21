import { SessionService } from './../../services/SessionService/SessionService.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-MainPage',
    templateUrl: './MainPage.component.html',
    styleUrls: ['./MainPage.component.css'],
})
export class MainPageComponent implements OnInit {
    username: string
    constructor(private session: SessionService) {
        this.username = session.getToken()
    }

    ngOnInit() {}

    logOut(){
        this.session.logOut()
    }
}
