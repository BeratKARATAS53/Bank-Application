import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/SessionService/SessionService.service';

@Component({
  selector: 'app-TransfersPage',
  templateUrl: './TransfersPage.component.html',
  styleUrls: ['./TransfersPage.component.css']
})
export class TransfersPageComponent implements OnInit {
    username: string
    constructor(private session: SessionService) {
        this.username = session.getToken()
    }

    ngOnInit() {}

    logOut(){
        this.session.logOut()
    }

}
