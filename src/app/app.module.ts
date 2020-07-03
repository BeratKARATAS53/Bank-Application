import { MyCurrencyPipe } from './pipes/myCurrency/myCurrency.pipe';
import { AbsoluteValuePipe } from './pipes/absoluteValue/absoluteValue.pipe';
import { AccountCardComponent } from './components/AccountCard/AccountCard.component';
import { SidebarComponent } from './components/Sidebar/Sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        AccountCardComponent,
        AbsoluteValuePipe,
        MyCurrencyPipe,
        routingComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
